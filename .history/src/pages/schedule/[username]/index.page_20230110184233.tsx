/* eslint-disable prettier/prettier */
import { Heading, Text, Avatar } from '@ignite-ui/react'
import { GetStaticProps } from 'next'
import { prisma } from '../../../lib/prisma'
import { Container, User } from './styles'

interface ScheduleProps {
  user: {
    name: string,
    bio: string,
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <Container>
      <User>
        <Avatar src={user.avatarUrl} />
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>
      </User>
    </Container>
  )
}

exxport const getStaticProps

export const getStaticProps : GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    }
  })

  if(!user) {
    return { 
      notFound: true
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      }
    },
    rivalidate: 60 * 60 * 24 //1dia
  }
}
