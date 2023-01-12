/* eslint-disable prettier/prettier */

import { CalendarBlank } from "phosphor-react";
import { ConfirmForm, FormHeader } from "./styles";

export function ConfirmStep() {
  function handleConfirmScheduling(){

  }

  return (
    <ConfirmForm as='form' onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
        </Text>
      </FormHeader>
    </ConfirmForm>
  )
}
