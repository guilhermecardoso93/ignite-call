/* eslint-disable prettier/prettier */
import { Heading, Text, Avatar } from '@ignite-ui/react'
import { Container, User } from './styles'

export default function Schedule() {
  return (
    <Container>
      <User>
        <Avatar src="https://github.com/guilhermecardoso9.png" />
        <Heading>Guilherme Cardoso</Heading>
        <Text>Dev Front-End</Text>
      </User>
    </Container>
  )
}
