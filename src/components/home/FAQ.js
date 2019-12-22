import React from 'react'

import { Heading } from 'components/Text'
import Button from 'components/Button'
import { Link } from 'gatsby'

import FAQContainer from 'components/Faq'

const FAQ = (props) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Heading>FAQ</Heading>
      <FAQContainer number={4} />
      <Button as={Link} to="/faq"
        style={{textDecoration: "none", fontWeight: "bold",
          fontSize: "2em", padding: ".4em .6em", margin: "auto"}}>
        View all
      </Button>
    </div>
  )
}

export default FAQ
