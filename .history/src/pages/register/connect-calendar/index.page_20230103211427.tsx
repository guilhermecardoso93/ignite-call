import { Heading, Text, MultiStep, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header, Form, FormError } from './styles'

import { useRouter } from 'next/router'
import { api } from '../../lib/axios'
import { AxiosError } from 'axios'

export default function Register() {
  const router = useRouter()

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos á medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Header>
    </Container>
  )
}
