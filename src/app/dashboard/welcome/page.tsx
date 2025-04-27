import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { Onboarding } from '@/components'
import { auth } from '@/server/auth'

export default async function WelcomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session?.user.onboarding === 'COMPLETED') {
    return redirect('/dashboard')
  }

  return (
    <div className="container mx-auto flex justify-center items-center py-10 px-4">
      <Onboarding />
    </div>
  )
}
