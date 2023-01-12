/* eslint-disable prettier/prettier */
import {  Text } from '@ignite-ui/react'
import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm, FormHeader } from "./styles";

export function ConfirmStep() {
  function handleConfirmScheduling() {

  }

  return (
    <ConfirmForm as='form' onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>
    </ConfirmForm>
  )
}
