/* eslint-disable prettier/prettier */
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, TextInput, TextArea, Button } from '@ignite-ui/react'
import { CalendarBlank, Clock } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ConfirmForm, FormHeader, FormActions, FormError } from "./styles";

type ConfirmFormData = z.infer<typeof confirmFormSchema>

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa no mínimo 3 caracteres'}),
  email: z.string().email({message: 'Digite um e-mail válido.'}),
  observations: z.string().nullable()
})

export function ConfirmStep() {
  const { register, handleSubmit, formState:{ isSubmitting, errors }} = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema)
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
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
        {errors.name && (
          <FormError>{errors.name.message}</FormError>
        )}
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="seu e-mail" {...register('email')}/>
        {errors.email && (
          <FormError>{errors.email?.message}</FormError>
        )}
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
