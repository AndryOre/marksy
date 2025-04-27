'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'

export function UserProfile() {
  const { data: session } = authClient.useSession()

  if (!session || !session.user) {
    return <div>No session found</div>
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground text-sm">Name</span>
          <span className="font-medium">{session.user.name}</span>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground text-sm">Email</span>
          <span className="font-medium">{session.user.email}</span>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground text-sm">
            Email Verification
          </span>
          {session.user.emailVerified ? (
            <Badge className="w-fit">Verified</Badge>
          ) : (
            <Badge variant="destructive" className="w-fit">
              Not Verified
            </Badge>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-muted-foreground text-sm">Onboarding</span>
          <span className="font-medium">{session.user.onboarding}</span>
        </div>
      </CardContent>
    </Card>
  )
}
