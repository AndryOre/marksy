import { SignOut } from '@/components'
import { UserProfile } from '@/components/user-profile'

export default async function DashboardPage() {
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
