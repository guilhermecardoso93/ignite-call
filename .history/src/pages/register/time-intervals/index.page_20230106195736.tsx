/* eslint-disable prettier/prettier */
import { Heading, Text, MultiStep, Checkbox, TextInput, Button } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { IntervalBox, IntervalContainer, IntervalItem, IntervalDay, IntervalInputs } from './styles'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/router'

const timeIntervalsFormSchema = z.object({

})

export default function TimeIntervals() {
  const { 
    register,
    handleSubmit,
    formState: { isSubmiting, errors },
  } = useForm()

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size="sm"
                type="time"
                step={60}
              />
              <TextInput
                size="sm"
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size="sm"
                type="time"
                step={60}
              />
              <TextInput
                size="sm"
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>
        <Button type="submit">
          Próximo Passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
