/* eslint-disable prettier/prettier */
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, TextInput, TextArea, Button } from '@ignite-ui/react'
import { CalendarBlank, Clock } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ConfirmForm, FormHeader, FormActions } from "./styles";

const confirmFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string().nullable()
})

export function ConfirmStep() {
  const { register, handleSubmit, formState:{ isSubmitting, errors }} = useForm({
    resolver: zodResolver(confirmFormSchema)
  })
  function handleConfirmScheduling() {

  }

  return (
    <ConfirmForm as='form' onSubmit={handleSubmit(handleConfirmScheduling)}>
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
        <TextInput placeholder="seu nome completo" {...register('name')}/>
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="seu e-mail" {...register('email')}/>
      </label>
      <label>
        <Text size="sm" {...register('observations')}>Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">Cancelar</Button>
        <Button type="submit" disabled={isSubmitting}>Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
