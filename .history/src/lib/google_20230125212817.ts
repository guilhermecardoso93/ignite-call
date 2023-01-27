import { google } from 'google';
import { prisma } from './prisma'

export async function getGoogleOAuthToken(userId: string) {

  const accont = await prisma.accont.findFirstorThrow({
    where: {
      provider: 'google',
      user_id: userId,
    }
  })

  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  )

  auth.setCredentials({
    access_token: account.access_token,
    refresh_token: account.refresh_token,
    expiry_date: account.expires_at
  })
}

