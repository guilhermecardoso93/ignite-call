/* eslint-disable prettier/prettier */
import {  Text, TextInput, TextArea, Button } from '@ignite-ui/react'
import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm, FormHeader, FormActions } from "./styles";

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

      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="seu nome completo" />
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="seu e-mail" />
      </label>
      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">Cancelar</Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
