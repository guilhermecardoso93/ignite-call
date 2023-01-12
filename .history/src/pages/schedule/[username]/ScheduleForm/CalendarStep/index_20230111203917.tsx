/* eslint-disable prettier/prettier */
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList } from "./styles";

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
      <TimePicker>
        <TimePickerHeader>terça-feira <spa>20 de Novembro </spa></TimePickerHeader>

        <TimePickerList>

        <
      </TimePicker>
      
      )}
    </Container>
  )
}