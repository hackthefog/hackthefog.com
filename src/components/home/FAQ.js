import React from 'react'

import { Heading } from 'components/Text'

import FAQContainer from '../Faq'

const FAQ = (props) => {
  return (
    <div>
      <Heading>FAQ</Heading>
      <FAQContainer number={4} />
    </div>
  )
}

export default FAQ
