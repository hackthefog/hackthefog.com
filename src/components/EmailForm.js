import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import jsCookie from 'js-cookie'
import styled from 'styled-components'
import { theme } from 'theme'
import { Body } from 'components/Text'
import Input from 'components/Input'
import Button from 'components/Button'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    margin: 0.5rem 0 0 0;
    max-width: 8rem;
    text-align: center;
  }

  ${theme.mediaQueries.md} {
    flex-direction: row;
    a {
      max-width: 24rem;
      margin: 0 0 0 0.5rem;
    }
  }
`

export default class EmailForm extends React.Component {
  state = {
    submitted: false,
  }

  render() {
    const { submitted } = this.state

    return submitted ? (
      <Body>
        Thanks! We’ll notify you when <strong>registration opens</strong>.
      </Body>
    ) : (
      <Formik
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .required('required')
            .email('must be a valid email'),
        })}
        validateOnChange={false}
        onSubmit={({ email }, { setSubmitting }) => {
          setSubmitting(true)
          axios
            .post('https://usebasin.com/f/01967a8ec9fc', { email })
            .then(res => {
              setSubmitting(false)
              if (res.status === 200) {
                this.setState({ submitted: true })
                jsCookie.set('emailSignup', 'true')
              }
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <p style={{ marginBottom: '0.25rem' }}>
              Enter your email to get updates
              {errors.email &&
                touched.email && (
                  <span style={{ color: theme.colors.red[6] }}>
                    {' '}
                    — {errors.email}
                  </span>
                )}
            </p>
            <Layout>
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="you@example.com"
                error={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Get notified
              </Button>
            </Layout>
          </form>
        )}
      </Formik>
    )
  }
}