/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList, TimePickerItem } from "./styles";
import { api } from "../../../../../lib/axios";
import { useRouter } from "next/router";

interface Availability {
  possibleTimes: number[],
  availableTimes: number[],
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState<Availability | null >(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api.get(`/users/${username}/availability`, {
      params: {
        date: dayjs(selectedDate).format('YYYY-MM-DD')
      }
    }).then((response) => {
      setAvailability(response.data)
    })
  }, [selectedDate, username])

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
                <TimePickerItem key={hour} disabled={!availability.avalibleTimes.includes(hour)}>
                {String(hour).padStart(2, '0')}:00h
              </TimePickerItem>
              )
            })}
            
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem>11:00h</TimePickerItem>
            <TimePickerItem>12:00h</TimePickerItem>
            <TimePickerItem>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>

      )}
    </Container>
  )
}