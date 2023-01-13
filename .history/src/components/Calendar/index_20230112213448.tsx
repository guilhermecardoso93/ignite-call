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

interface CalendarWeek {
  week: number,
  days: Array<{
    date: dayjs.Dayjs,
    disabled: boolean
  }>
}
type CalendarWeeks = CalendarWeek[]

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

    const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
    const firstWeekDay = currentDate.get('day')
    const lastWeekDay = lastDayInCurrentMonth.get('day')


    const previousMonthFillArray = Array.from({
      length: firstWeekDay
    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    }).reverse()

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1)
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    }).reverse()

    const calendarDays = [
      ...previousMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
      ...nextMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
      ...dayInMonthArray.map(date => {
        return { date, disabled: false }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, index, original) => {
        const isNewWeek = index % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: index / 7 + 1,
            days: original.slice(index, index + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks

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
          {calendarWeeks.map(({week, days}) => {
            return (
              <tr key={week}>
                {days.map(({date, disabled}) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay disabled={disabled}>
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
         
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

