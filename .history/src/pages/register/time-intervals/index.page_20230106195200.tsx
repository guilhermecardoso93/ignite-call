/* eslint-disable prettier/prettier */
import { Heading, Text, MultiStep, Checkbox, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import { IntervalBox,IntervalContainer, IntervalItem, IntervalDay, IntervalInputs  } from './styles'

export default function TimeIntervals() {
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
