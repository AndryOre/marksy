import { env } from '@/env'

import { LoopsClient } from 'loops'

const loops = new LoopsClient(env.LOOPS_API_KEY)

export const sendVerificationEmail = async (
  email: string,
  verificationUrl: string,
) => {
  const dataVariables: { verificationUrl: string } = {
    verificationUrl,
  }

  const resp:
    | {
        success: boolean
        path?: string
        message?: string
      }
    | {
        success: false
        error: {
          path: string
          message: string
        }
        transactionalId?: string
      } = await loops.sendTransactionalEmail({
    transactionalId: 'cm9sor4y916zxhrd8jr9lsnwk',
    email: email,
    dataVariables,
  })

  if (!resp.success) {
    console.error('Email sending failed:', resp.success)
  } else {
    console.log('Email sent successfully')
  }
}

export const sendResetPasswordEmail = async (
  email: string,
  resetUrl: string,
) => {
  const dataVariables: { resetUrl: string } = {
    resetUrl,
  }

  const resp:
    | {
        success: boolean
        path?: string
        message?: string
      }
    | {
        success: false
        error: {
          path: string
          message: string
        }
        transactionalId?: string
      } = await loops.sendTransactionalEmail({
    transactionalId: 'cm9udikns0ar810e7z1x72inn',
    email: email,
    dataVariables,
  })

  if (!resp.success) {
    console.error('Email sending failed:', resp.success)
  } else {
    console.log('Email sent successfully')
  }
}
