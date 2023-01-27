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
}

