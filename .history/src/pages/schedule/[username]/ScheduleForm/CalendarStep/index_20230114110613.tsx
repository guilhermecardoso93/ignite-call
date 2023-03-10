/* eslint-disable prettier/prettier */
import { useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList, TimePickerItem } from "./styles";
import { api } from "../../../../../lib/axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";

interface Availability {
  possibleTimes: number[],
  availableTimes: number[],
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  //  const [availability, setAvailability] = useState<Availability | null >(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

  const selectedDateWithoutTime = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD'): null

  const {data: availability } = useQuery<Availability>(['availability', selectedDateWithoutTime], async () => {
    const response = await api.get(`/users/${username}/availability`, { 
      params: {
        date: selectedDateWithoutTime,
      }
    })

    return response.data
  }, {
    enabled: !!selectedDate
  })

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar
        selectedDate={selectedDate} onDateSelected={setSelectedDate}
      />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>{weekDay}<span> - {describeDate}</span></TimePickerHeader>

          <TimePickerList>

            {availability?.possibleTimes.map(hour => {
              return (
                <TimePickerItem 
                  key={hour} 
                  disabled={!availability.availableTimes.includes(hour)}
                >
                {String(hour).padStart(2, '0')}:00h
              </TimePickerItem>
              )
            })}
          </TimePickerList>
        </TimePicker>

      )}
    </Container>
  )
}