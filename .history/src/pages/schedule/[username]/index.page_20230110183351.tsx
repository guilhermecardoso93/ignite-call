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

export default function Schedule({ name, bio, avatarUrl }: ScheduleProps) {
  return (
    <Container>
      <User>
        <Avatar src={avatarUrl} />
        <Heading>{name}</Heading>
        <Text>{bio}</Text>
      </User>
    </Container>
  )
}

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
    }
  }
}
