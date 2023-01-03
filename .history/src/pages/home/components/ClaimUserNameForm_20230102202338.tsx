import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './style'

export function ClaimUserNameForm() {
  return (
    <Form>
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit" />
    </Form>
  )
}
