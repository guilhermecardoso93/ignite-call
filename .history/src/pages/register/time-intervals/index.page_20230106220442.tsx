/* eslint-disable prettier/prettier */
import { Heading, Text, MultiStep, Checkbox, TextInput, Button } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { IntervalBox, IntervalContainer, IntervalItem, IntervalDay, IntervalInputs } from './styles'
import { ArrowRight } from 'phosphor-react'

import { useFieldArray, useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '../../../utils/get-weekdays'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/router'

const timeIntervalsFormSchema = z.object({
  intervals: z.array(
    z.object({ 
      weekDay: z.number().min(0).max(6),
      enabled: z.boolean(),
      starTime: z.string(),
      endTime: z.string(),
  })).lenght(7)
})

type TimeIntervalsFormData = z.infer<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmiting, errors, },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    }
  })

  const weekDays = getWeekDays()
  const intervals = watch('intervals')

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })

  async function handleSetTimeIntervals(data: TimeIntervalsFormData) {

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
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller 
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field } ) => {
                      return (
                      < Checkbox 
                        onCheckedChange={(checked) => {
                          field.onChange(checked === true )
                        }}
                        checked={field.value}
                      />
                      )
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
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


