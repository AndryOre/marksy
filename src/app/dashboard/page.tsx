import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { SignOut } from '@/components'
import { UserProfile } from '@/components/user-profile'
import { auth } from '@/server/auth'

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session?.user.onboarding === 'NOT_STARTED') {
    return redirect('/dashboard/welcome')
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <SignOut />
      </div>
      <UserProfile />
    </div>
  )
}
