import { useRef, useState } from 'react'

import { Input } from '@/components/GlobalStyle'

import { Container, Title, Label, Message, Button } from './Subscribe.styles'

export default function Subscribe() {
  const inputEmail = useRef(null)
  const [message, setMessage] = useState('')

  const subscribe = async e => {
    e.preventDefault()

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEmail.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)
      return
    }

    inputEmail.current.value = ''
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }

  return (
    <Container onSubmit={subscribe}>
      <Title>Join the Newsletter</Title>
      <Label htmlFor="email-input">{'Email Address'}</Label>
      <Input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEmail}
        required
        type="email"
      />
      <Message>
        {message
          ? message
          : `I'll only send emails when new content is posted. No spam.`}
      </Message>
      <Button type="submit">Subscribe</Button>
    </Container>
  )
}
