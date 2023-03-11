import React from 'react'
import { Button, Input, Textarea } from '@mantine/core';

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact Form</h2>
      <Input.Wrapper
        label="Your Name"
        required
        className='contact__input'
        >
        <Input
          placeholder="Name"
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Your Phone Number"
        required
        className='contact__input'
      >
        <Input
          placeholder="(000)-000-0000"
          mask="(000) 000-0000"
        />
      </Input.Wrapper>
      <Textarea
        placeholder="Setup needed, replace tuners and strings."
        label="Description of Issue"
        description="In as much detail as possible describe the problem with your instrument"
        radius="md"
        withAsterisk
        className='contact__input'
      />
      <Button
        color='orange'
        size='lg'
        uppercase
      // onClick={() => handleNavClick('')}
        className='contact__button'
      >
        Submit
      </Button>
    </div>
  )
}
