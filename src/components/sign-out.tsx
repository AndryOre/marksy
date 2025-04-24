'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components'
import { signOut } from '@/lib/auth-client'

export function SignOut() {
  const router = useRouter()
  return (
    <Button
      onClick={() =>
        signOut({ fetchOptions: { onSuccess: () => router.push('/auth') } })
      }
    >
      Sign Out
    </Button>
  )
}
