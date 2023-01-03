import { Heading, Text} from "@ignite-ui/react";
import { Container, Header } from "./styles";

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
      </Header>
    </Container>
  )
}