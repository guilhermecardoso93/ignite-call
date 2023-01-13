/* eslint-disable prettier/prettier */
import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerList, TimePickerItem } from "./styles";

export function CalendarStep() {
  const [currentDate, setCurrentDate ] = useState(() => {
    return dayjs().set('date', 1)
  })

  const isDateSelected = false

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>5454545 <span>{currentYear}</span></TimePickerHeader>

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
            <TimePickerItem>19:00h</TimePickerItem>
            <TimePickerItem>20:00h</TimePickerItem>
            <TimePickerItem>21:00h</TimePickerItem>
            <TimePickerItem>22:00h</TimePickerItem>
            <TimePickerItem>23:00h</TimePickerItem>
            <TimePickerItem>00:00h</TimePickerItem>
            <TimePickerItem>01:00h</TimePickerItem>
            <TimePickerItem>02:00h</TimePickerItem>
            <TimePickerItem>03:00h</TimePickerItem>
            <TimePickerItem>04:00h</TimePickerItem>
            <TimePickerItem>05:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>07:00h</TimePickerItem>

          </TimePickerList>
        </TimePicker>

      )}
    </Container>
  )
}