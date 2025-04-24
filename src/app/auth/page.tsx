import {
  SignIn,
  SignUp,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="sign-in" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignIn />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  )
}
