'use client'

import { useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components'
import { sendVerificationEmail, signUp } from '@/lib/auth-client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'First name must be at least 2 characters')
      .max(50),
    lastName: z
      .string()
      .min(2, 'Last name must be at least 2 characters')
      .max(50),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(8, 'Password confirmation must be at least 8 characters'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

export function SignUp() {
  const [loading, setLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    signUpWithEmail({
      email: values.email,
      password: values.password,
      name: `${values.firstName} ${values.lastName}`,
    })
  }

  const signUpWithEmail = async ({
    email,
    password,
    name,
  }: {
    email: string
    password: string
    name: string
  }) => {
    const { data, error } = await signUp.email(
      {
        email,
        password,
        name,
        callbackURL: '/dashboard',
      },
      {
        onResponse: (ctx) => {
          console.log(ctx)
          setLoading(false)
        },
        onRequest: (ctx) => {
          console.log(ctx)
          setLoading(true)
        },
        onSuccess: (ctx) => {
          console.log(ctx)
          setLoading(false)
          setIsRegistered(true)
        },
        onError: (ctx) => {
          console.error(ctx)
          toast.error(ctx.error.message)
        },
      },
    )
    if (error) throw error
    return data
  }

  return (
    <Card className="z-50 rounded-md rounded-t-none max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isRegistered ? (
          <div className="text-center space-y-2 py-8">
            <p className="text-lg font-medium">Registro exitoso</p>
            <p>
              Se envió un correo de verificación. Revisa tu email para
              continuar.
            </p>
            <Button
              disabled={loading}
              onClick={() =>
                sendVerificationEmail({ email: signUpForm.getValues('email') })
              }
            >
              Resend verification email
            </Button>
          </div>
        ) : (
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={signUpForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Max" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Robinson" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !signUpForm.formState.isValid}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  'Create an account'
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
