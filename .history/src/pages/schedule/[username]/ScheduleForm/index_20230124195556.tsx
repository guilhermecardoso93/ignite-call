/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectDateTime() {

  }

  if (selectedDateTime) {
    return (
      <ConfirmStep schedulingDate={selectedDateTime}/>
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />

}
