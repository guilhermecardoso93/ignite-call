import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 852,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const User = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [`>${Heading}`]: {
    lineHeight: '$base',
    marginTop: '$2',
  },

  [`>${Text}`]: {
    color: '$gray200',
  },
})
