import { Heading, Text, MultiStep, TextInput } from '@ignite-ui/react'
import { Container, Header, Form } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome Completo</Text>
          <TextInput placeholder="seu nome completo" />
        </label>
        <Button type="submit">
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
