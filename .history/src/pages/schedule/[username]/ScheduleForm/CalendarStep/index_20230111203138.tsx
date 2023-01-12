/* eslint-disable prettier/prettier */
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker } from "./styles";

export function CalendarStep() {
  const isDateSelect = true

  return (
    <Container>
      <Calendar />
      { isDateSelect && <TimePicker />}
    </Container>
  )
}