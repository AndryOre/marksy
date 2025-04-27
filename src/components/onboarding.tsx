'use client'

import { useRef, useState } from 'react'

import Image from 'next/image'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components'
import { socials } from '@/constants'
import { cn } from '@/lib/utils'

import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, ImageUp, Plus, SquareUser, Tag, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const MAX_IMAGE_SIZE = 5 * 1024 * 1024

const imageFileSchema = z
  .any()
  .refine(
    (file) =>
      !file ||
      typeof file === 'string' ||
      (file instanceof File &&
        file.size <= MAX_IMAGE_SIZE &&
        [
          'image/png',
          'image/jpeg',
          'image/jpg',
          'image/webp',
          'image/svg+xml',
        ].includes(file.type)),
    {
      message: 'Must be a valid image (max 5MB)',
    },
  )

const socialLinkSchema = z.object({
  platform: z.enum(
    socials.map((social) => social.name) as [string, ...string[]],
    { message: 'Select a platform' },
  ),
  username: z.string().min(1, { message: 'Username is required' }),
  label: z.string().optional(),
})

const onboardingSchema = z.object({
  name: z.string().min(5, { message: 'Name must be at least 5 characters' }),
  profilePicture: imageFileSchema,
  bannerPicture: imageFileSchema,
  socialLinks: z.array(socialLinkSchema),
})

export function Onboarding() {
  const onboardingForm = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      profilePicture: '',
      bannerPicture: '',
      socialLinks: [],
    },
  })

  const [profilePreview, setProfilePreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false)
  const [isProfileDragOver, setIsProfileDragOver] = useState(false)
  const [isBannerDragOver, setIsBannerDragOver] = useState(false)

  const profileInputRef = useRef<HTMLInputElement | null>(null)
  const bannerInputRef = useRef<HTMLInputElement | null>(null)

  const socialsForm = useForm<z.infer<typeof socialLinkSchema>>({
    resolver: zodResolver(socialLinkSchema),
    mode: 'onBlur',
    defaultValues: {
      platform: '',
      username: '',
      label: '',
    },
  })

  const socialLinks = onboardingForm.watch('socialLinks')

  function addSocialLink(data: z.infer<typeof socialLinkSchema>) {
    onboardingForm.setValue('socialLinks', [
      ...onboardingForm.getValues('socialLinks'),
      data,
    ])
    socialsForm.reset()
    setIsSocialDialogOpen(false)
  }

  function removeSocialLink(platform: string) {
    onboardingForm.setValue(
      'socialLinks',
      onboardingForm
        .getValues('socialLinks')
        .filter((l) => l.platform !== platform),
    )
  }

  async function onSubmit(values: z.infer<typeof onboardingSchema>) {
    const profileBase64 =
      values.profilePicture instanceof File
        ? await fileToBase64(values.profilePicture)
        : values.profilePicture || null

    const bannerBase64 =
      values.bannerPicture instanceof File
        ? await fileToBase64(values.bannerPicture)
        : values.bannerPicture || null

    const payload = {
      ...values,
      profilePicture: profileBase64,
      bannerPicture: bannerBase64,
    }

    console.log(payload)
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  return (
    <>
      <Card className="w-full max-w-2xl">
        <Form {...onboardingForm}>
          <form
            onSubmit={onboardingForm.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <CardHeader>
              <CardTitle>Onboarding</CardTitle>
              <CardDescription>
                Complete the onboarding process to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={onboardingForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={onboardingForm.control}
                name="profilePicture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Picture</FormLabel>
                    <FormControl>
                      <div
                        className={cn(
                          'flex items-center gap-2 size-fit',
                          isProfileDragOver && 'opacity-80',
                        )}
                        onDragOver={(e) => {
                          e.preventDefault()
                          setIsProfileDragOver(true)
                        }}
                        onDragLeave={() => setIsProfileDragOver(false)}
                        onDragEnd={() => setIsProfileDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault()
                          setIsProfileDragOver(false)
                          const file = e.dataTransfer.files?.[0]
                          if (
                            file &&
                            [
                              'image/png',
                              'image/jpeg',
                              'image/jpg',
                              'image/webp',
                              'image/svg+xml',
                            ].includes(file.type)
                          ) {
                            setProfilePreview(URL.createObjectURL(file))
                            field.onChange(file)
                            onboardingForm.trigger('profilePicture')
                          }
                        }}
                      >
                        <div className="relative">
                          <label
                            htmlFor="profile-upload"
                            className="cursor-pointer hover:opacity-80 rounded-md"
                          >
                            <Avatar className="size-24 rounded-md">
                              <AvatarImage
                                className="border border-input rounded-md"
                                src={profilePreview || field.value}
                              />
                              <AvatarFallback className="rounded-md border border-dashed border-input">
                                <SquareUser />
                              </AvatarFallback>
                            </Avatar>
                          </label>
                          {profilePreview && (
                            <Button
                              type="button"
                              size="icon"
                              className="absolute -top-1 -right-1 size-6 hover:bg-destructive rounded-full group"
                              onClick={() => {
                                setProfilePreview(null)
                                field.onChange(null)
                                onboardingForm.clearErrors('profilePicture')
                                if (profileInputRef.current)
                                  profileInputRef.current.value = ''
                              }}
                            >
                              <X className="size-3.5 group-hover:text-white" />
                            </Button>
                          )}
                        </div>
                        <Input
                          className="hidden"
                          id="profile-upload"
                          ref={profileInputRef}
                          type="file"
                          accept="image/svg+xml,image/png,image/jpeg,image/jpg,image/webp"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (!file) {
                              setProfilePreview(null)
                              field.onChange(null)
                              onboardingForm.trigger('profilePicture')
                              return
                            }
                            setProfilePreview(URL.createObjectURL(file))
                            field.onChange(file)
                            onboardingForm.trigger('profilePicture')
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Upload a profile picture for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={onboardingForm.control}
                name="bannerPicture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banner Picture</FormLabel>
                    <FormControl>
                      <div
                        className={cn(
                          'flex items-center gap-2 w-full',
                          isBannerDragOver && 'opacity-80',
                        )}
                        onDragOver={(e) => {
                          e.preventDefault()
                          setIsBannerDragOver(true)
                        }}
                        onDragLeave={() => setIsBannerDragOver(false)}
                        onDragEnd={() => setIsBannerDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault()
                          setIsBannerDragOver(false)
                          const file = e.dataTransfer.files?.[0]
                          if (
                            file &&
                            [
                              'image/png',
                              'image/jpeg',
                              'image/jpg',
                              'image/webp',
                              'image/svg+xml',
                            ].includes(file.type)
                          ) {
                            setBannerPreview(URL.createObjectURL(file))
                            field.onChange(file)
                            onboardingForm.trigger('bannerPicture')
                          }
                        }}
                      >
                        <div className="relative w-full">
                          <label
                            htmlFor="banner-upload"
                            className="cursor-pointer hover:opacity-80 rounded-md w-full block"
                          >
                            <Avatar className="w-full h-36 aspect-video rounded-md">
                              <AvatarImage
                                src={bannerPreview || field.value}
                                className="object-cover w-full h-full aspect-video rounded-md"
                              />
                              <AvatarFallback className="rounded-md aspect-video flex flex-col items-center justify-center gap-2 border border-dashed border-input">
                                <ImageUp />
                                <div className="flex flex-col gap-1 text-center">
                                  <p className="text-xs font-medium">
                                    Drop your image here or click to browse
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    SVG, PNG, JPG or WEBP (max. 5MB)
                                  </p>
                                </div>
                              </AvatarFallback>
                            </Avatar>
                          </label>
                          {bannerPreview && (
                            <Button
                              type="button"
                              size="icon"
                              className="absolute -top-1 -right-1 size-6 hover:bg-destructive rounded-full group"
                              onClick={() => {
                                setBannerPreview(null)
                                field.onChange(null)
                                onboardingForm.clearErrors('bannerPicture')
                                if (bannerInputRef.current)
                                  bannerInputRef.current.value = ''
                              }}
                            >
                              <X className="size-3.5 group-hover:text-white" />
                            </Button>
                          )}
                        </div>
                        <Input
                          className="hidden"
                          id="banner-upload"
                          ref={bannerInputRef}
                          type="file"
                          accept="image/svg+xml,image/png,image/jpeg,image/jpg,image/webp"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (!file) {
                              setBannerPreview(null)
                              field.onChange(null)
                              onboardingForm.trigger('bannerPicture')
                              return
                            }
                            setBannerPreview(URL.createObjectURL(file))
                            field.onChange(file)
                            onboardingForm.trigger('bannerPicture')
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Upload a banner picture for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2">
                <FormLabel>Social Links</FormLabel>
                <div className="flex gap-2 flex-wrap">
                  {socialLinks.map((link) => (
                    <div
                      key={link.platform}
                      className={cn(
                        buttonVariants({
                          variant: 'outline',
                        }),
                        'cursor-default px-2',
                      )}
                    >
                      <Image
                        src={
                          socials.find(
                            (social) => social.name === link.platform,
                          )?.icon as string
                        }
                        alt={link.platform}
                        width={16}
                        height={16}
                      />
                      <p className="text-sm font-medium">
                        {link.label || link.username}
                      </p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="hover:text-red-500 size-6"
                        onClick={() => removeSocialLink(link.platform)}
                      >
                        <X />
                      </Button>
                    </div>
                  ))}
                  <Dialog
                    open={isSocialDialogOpen}
                    onOpenChange={setIsSocialDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button variant="secondary">
                        <Plus />
                        Add Link
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Social Link</DialogTitle>
                        <DialogDescription>
                          Add a social link to your profile.
                        </DialogDescription>
                      </DialogHeader>
                      <Form {...socialsForm}>
                        <form
                          onSubmit={(e) => {
                            e.stopPropagation()
                            socialsForm.handleSubmit(addSocialLink)(e)
                          }}
                          className="space-y-4"
                        >
                          <FormField
                            control={socialsForm.control}
                            name="platform"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Platform</FormLabel>
                                <FormControl>
                                  <div className="flex flex-wrap gap-4">
                                    {socials.map((social) => (
                                      <Button
                                        key={social.name}
                                        type="button"
                                        variant={
                                          field.value === social.name
                                            ? 'outline'
                                            : 'ghost'
                                        }
                                        size="icon"
                                        tooltip={social.label}
                                        onClick={() =>
                                          field.onChange(social.name)
                                        }
                                      >
                                        <Image
                                          src={social.icon}
                                          alt={social.label}
                                          width={32}
                                          height={32}
                                          className="size-4"
                                        />
                                      </Button>
                                    ))}
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex gap-2 items-start">
                            <FormField
                              control={socialsForm.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem className="flex-1">
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    {['website', 'custom'].includes(
                                      socialsForm.watch('platform'),
                                    ) ? (
                                      <div className="relative">
                                        <Input
                                          className="peer ps-16"
                                          placeholder="google.com"
                                          {...field}
                                        />
                                        <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
                                          https://
                                        </span>
                                      </div>
                                    ) : (
                                      <div className="relative">
                                        <Input
                                          className="peer ps-9"
                                          placeholder="Username"
                                          {...field}
                                        />
                                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                                          <AtSign
                                            size={16}
                                            aria-hidden="true"
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={socialsForm.control}
                              name="label"
                              render={({ field }) => (
                                <FormItem className="flex-1">
                                  <FormLabel>Label</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Input
                                        className="peer ps-9"
                                        placeholder="Label"
                                        {...field}
                                      />
                                      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                                        <Tag size={16} aria-hidden="true" />
                                      </div>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <DialogFooter>
                            <Button type="submit">Add Social Link</Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
                <FormDescription>
                  Add social links to your profile.
                </FormDescription>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                type="submit"
                disabled={
                  onboardingForm.formState.isSubmitting ||
                  !onboardingForm.formState.isValid
                }
              >
                {onboardingForm.formState.isSubmitting
                  ? 'Submitting...'
                  : 'Submit'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  )
}
