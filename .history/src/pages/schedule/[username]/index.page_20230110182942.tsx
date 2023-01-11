/* eslint-disable prettier/prettier */
import { Heading, Text, Avatar } from '@ignite-ui/react'
import { GetStaticProps } from 'next'
import { prisma } from '../../../lib/prisma'
import { Container, User } from './styles'

export default function Schedule() {
  return (
    <Container>
      <User>
        <Avatar src="https://github.com/guilhermecardoso93.png" />
        <Heading>Guilherme Cardoso</Heading>
        <Text>Dev Front-End</Text>
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

    }
  }
}
