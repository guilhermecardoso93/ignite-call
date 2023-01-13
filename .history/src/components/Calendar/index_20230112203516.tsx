/* eslint-disable prettier/prettier */
import { useState } from "react";
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
  const [currentDate, setCurrentDate ] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth(){
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth(){
    const nextMonthDate = currentDate.add(1, 'month')

    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
        {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
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

