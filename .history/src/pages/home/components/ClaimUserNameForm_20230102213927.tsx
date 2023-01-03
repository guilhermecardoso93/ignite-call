import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras ou hifens',
    })
    .transform((username) => username.toLowerCase()),
})

type claimUserNameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const { register, handleSubmit } = useForm<claimUserNameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: claimUserNameFormData) {
    console.log(data.username)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
    </Form>
  )
}
