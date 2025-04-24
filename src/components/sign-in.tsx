'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components'
import {
  forgetPassword,
  sendVerificationEmail,
  signIn,
} from '@/lib/auth-client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export function SignIn() {
  const [signInLoading, setSignInLoading] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)
  const [showVerificationMessage, setShowVerificationMessage] = useState(false)
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false)
  const [resetRequestSent, setResetRequestSent] = useState(false)
  const router = useRouter()

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const resetPasswordForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const watchedSignInEmail = signInForm.watch('email')

  useEffect(() => {
    if (showResetPasswordForm && watchedSignInEmail) {
      resetPasswordForm.setValue('email', watchedSignInEmail)
    }
  }, [showResetPasswordForm, watchedSignInEmail, resetPasswordForm])

  function onSignInSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
    signInWithEmail(values.email, values.password, values.rememberMe ?? false)
  }

  async function onResetPasswordSubmit(
    values: z.infer<typeof resetPasswordSchema>,
  ) {
    setResetLoading(true)
    setResetRequestSent(false)
    try {
      await forgetPassword({
        email: values.email,
        redirectTo: '/auth/reset-password',
      })
      setResetRequestSent(true)
      toast.success(
        'If an account exists for this email, a password reset link has been sent.',
      )
    } catch (error: unknown) {
      console.error('Password reset request failed:', error)
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to send password reset email.',
      )
    } finally {
      setResetLoading(false)
    }
  }

  const signInWithEmail = async (
    email: string,
    password: string,
    rememberMe: boolean,
  ) => {
    const { data, error } = await signIn.email(
      {
        email,
        password,
        callbackURL: '/dashboard',
        rememberMe,
      },
      {
        onResponse: (ctx) => {
          console.log(ctx)
          setSignInLoading(false)
        },
        onRequest: (ctx) => {
          console.log(ctx)
          setSignInLoading(true)
        },
        onSuccess: (ctx) => {
          console.log(ctx)
          router.push('/dashboard')
        },
        onError: (ctx) => {
          console.error(ctx)
          setSignInLoading(false)
          const msg = ctx.error.message
          if (ctx.error.code === 'EMAIL_NOT_VERIFIED') {
            setShowVerificationMessage(true)
            toast.info('Se envió un correo de verificación. Revisa tu email.')
          } else {
            toast.error(msg)
          }
        },
      },
    )
    if (error) throw error
    return data
  }

  const signInWithSocial = async (provider: 'github') => {
    const result = await signIn.social({
      provider,
      callbackURL: '/dashboard',
      errorCallbackURL: '/error',
      newUserCallbackURL: '/welcome',
    })
    return result
  }

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">
          {showResetPasswordForm ? 'Reset Password' : 'Sign In'}
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          {showResetPasswordForm
            ? "Enter your email address and we'll send you a link to reset your password."
            : 'Enter your email below to login to your account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {showVerificationMessage ? (
          <div className="text-center space-y-2 py-8">
            <p className="text-lg font-medium">
              Verifica tu correo electrónico
            </p>
            <p>
              Se envió un correo de verificación. Revisa tu email para
              continuar.
            </p>
            <Button
              disabled={signInLoading}
              onClick={() =>
                sendVerificationEmail({ email: signInForm.getValues('email') })
              }
            >
              Resend verification email
            </Button>
            <Button
              variant="link"
              onClick={() => setShowVerificationMessage(false)}
            >
              Back to Sign In
            </Button>
          </div>
        ) : showResetPasswordForm ? (
          resetRequestSent ? (
            <div className="text-center space-y-2 py-8">
              <p className="text-lg font-medium">Check your email</p>
              <p>
                If an account with that email exists, we&apos;ve sent
                instructions to reset your password.
              </p>
              <div className="flex flex-col items-center gap-2">
                <Button
                  variant="link"
                  onClick={() => setResetRequestSent(false)}
                  className="p-0 h-auto"
                >
                  Send again?
                </Button>
                <Button
                  variant="link"
                  onClick={() => {
                    setShowResetPasswordForm(false)
                    setResetRequestSent(false)
                  }}
                  className="p-0 h-auto text-muted-foreground"
                >
                  Back to Sign In
                </Button>
              </div>
            </div>
          ) : (
            <Form {...resetPasswordForm}>
              <form
                onSubmit={resetPasswordForm.handleSubmit(onResetPasswordSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={resetPasswordForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={resetLoading}
                >
                  {resetLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
                <Button
                  variant="link"
                  className="w-full text-muted-foreground"
                  onClick={() => setShowResetPasswordForm(false)}
                >
                  Back to Sign In
                </Button>
              </form>
            </Form>
          )
        ) : (
          <>
            <Form {...signInForm}>
              <form
                onSubmit={signInForm.handleSubmit(onSignInSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={signInForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Password</FormLabel>
                        <Button
                          variant="link"
                          type="button"
                          onClick={() => {
                            const currentEmail = signInForm.getValues('email')
                            if (currentEmail) {
                              resetPasswordForm.setValue('email', currentEmail)
                            }
                            setShowResetPasswordForm(true)
                          }}
                          className="ml-auto inline-block text-sm underline h-auto p-0"
                        >
                          Forgot your password?
                        </Button>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="password"
                          autoComplete="current-password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signInForm.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Remember me</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={signInLoading || !signInForm.formState.isValid}
                >
                  {signInLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    'Login'
                  )}
                </Button>
              </form>
            </Form>
            <div className="w-full gap-2 flex items-center justify-between flex-col mt-4">
              <Button
                variant="outline"
                className="w-full gap-2"
                disabled={signInLoading}
                onClick={() => signInWithSocial('github')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
                Sign in with Github
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
