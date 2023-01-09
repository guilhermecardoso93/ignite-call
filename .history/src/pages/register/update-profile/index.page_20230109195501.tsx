/* eslint-disable prettier/prettier */
import { Heading, Text, MultiStep, Button, TextArea, Avatar } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'


const updateProfileSchema = z.object({
  bio: z.string(),
})

type updateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: {  isSubmitting },
  } = useForm<updateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  console.log(session)

  async function handleUpdateProfile(data: updateProfileData) {
   
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={4} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size='sm'>
            Foto de Perfil
          </Text>
          <Avatar 
            src={session.data?.user.avatar_url}
            alt='Sua foto de perfil'
          />
        </label>

        <label>
          <Text size="sm">Sobre você</Text>
          <TextArea {...register('bio')}/>
          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </label>
        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions( req, res )
  )
  return {
    props: {
      session
    },
  }
}