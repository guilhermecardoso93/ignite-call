/* eslint-disable prettier/prettier */
import { useMemo, useState } from "react";
import dayjs from "dayjs";

import {
  CalendarActions,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  CalendarBody,
  CalendarDay
} from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { getWeekDays } from '../../utils/get-weekdays'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')

    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const dayInMonthArray = Array.from({
      length: currentDate.daysInMonth()
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay
    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    })

    return dayInMonthArray
  }, [currentDate])

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous Month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next Month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map(weekday => <th key={weekday}>{weekday}.</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>

              </CalendarDay>
            </td>
            <td>
              <CalendarDay>

              </CalendarDay>
            </td>
            <td>
              <CalendarDay>

              </CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

