/* eslint-disable prettier/prettier */
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker } from "./styles";

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

            { isDateSelected && <TimePicker />}
    </Container>
  )
}