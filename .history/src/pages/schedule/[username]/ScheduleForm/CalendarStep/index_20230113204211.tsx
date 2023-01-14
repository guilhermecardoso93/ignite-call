/* eslint-disable prettier/prettier */
import { useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList, TimePickerItem } from "./styles";

export function CalendarStep() {
  const [ selectedDate, setSelectedDate ] = useState<Date | null>(null)

   const isDateSelected = !!selectedDate

   const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar 
        selectedDate={selectedDate} onDateSelected={setSelectedDate}
      />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>{wekday}<span>20 de março</span></TimePickerHeader>

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