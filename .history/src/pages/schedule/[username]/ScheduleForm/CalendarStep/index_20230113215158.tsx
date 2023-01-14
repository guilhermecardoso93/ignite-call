/* eslint-disable prettier/prettier */
import { useEffect, useState, useRouter } from "react";
import dayjs from "dayjs";
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList, TimePickerItem } from "./styles";
import { api } from "../../../../../lib/axios";

export function CalendarStep() {
  const [ selectedDate, setSelectedDate ] = useState<Date | null>(null)
  const [ availability, setAvailability ] = useState(null)
  
  const router = useRouter()

   const isDateSelected = !!selectedDate
    const username = String(router.query.username)

   const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
   const describeDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

   useEffect(() => {
    if (!selectedDate) {
      return null
    }
     api.get(`/users/${username}`)

   }, [setSelectedDate])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar 
        selectedDate={selectedDate} onDateSelected={setSelectedDate}
      />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>{weekDay}<span> - {describeDate}</span></TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
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