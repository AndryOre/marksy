import { headers } from 'next/headers'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { auth } from '@/server/auth'

export async function UserProfile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

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
      </CardContent>
    </Card>
  )
}
