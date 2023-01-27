/* eslint-disable prettier/prettier */
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import PreviewImage from "../../assets/app-preview.png";
import { ClaimUserNameForm } from "./components/ClaimUserNameForm";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda! | Ignite Call"
        description="A short description goes here."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUserNameForm />
        </Hero>
        <Preview>
          <Image
            src={PreviewImage}
            height={400}
            quality={100}
            priority
            alt="Imagem de uma calendário"
          />
        </Preview>
      </Container>
    </>
  );
}
