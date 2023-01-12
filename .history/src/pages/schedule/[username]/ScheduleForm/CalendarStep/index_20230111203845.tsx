/* eslint-disable prettier/prettier */
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker } from "./styles";

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
      <TimePicker>
        <TimePickerHeader>terça-feira <spa>20 de Novembro </spa></TimePickerHeader>
      </TimePicker>
      
      )}
    </Container>
  )
}