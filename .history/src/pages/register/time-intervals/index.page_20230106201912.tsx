/* eslint-disable prettier/prettier */
import { Heading, Text, MultiStep, Checkbox, TextInput, Button } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { IntervalBox, IntervalContainer, IntervalItem, IntervalDay, IntervalInputs } from './styles'
import { ArrowRight } from 'phosphor-react'

import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '../../../utils/get-weekdays'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/router'

const timeIntervalsFormSchema = z.object({

})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmiting, errors, },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enable: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enable: false, startTime: '08:00', endTime: '18:00' },
      ],
    }
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })

  async function handleSetTimeIntervals() {

  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox />
                  <Text>{getWeekDays(field.weekDay)}</Text>
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
            )
          })}
        </IntervalContainer>
        <Button type="submit">
          Próximo Passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}


