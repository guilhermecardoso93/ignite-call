import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const user = await prisma.create({
    data: {
      name,
      username,
    },
  })

  return res.status(200).json(req.body)
}
