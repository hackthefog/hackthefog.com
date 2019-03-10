import React from 'react'
import styled from 'styled-components'
import { Heading, Lead } from 'components/Text'
import { SplitLayout, Half } from 'components/Layouts'
import EmailForm from 'components/EmailForm'
import { theme } from 'theme'
import fonts from '../../../static/fonts/mercury/index.css'

const ArticleCard = styled.article`
  margin-right: 1.5rem;
  position: relative;
  border-radius: 1rem;
  background-image: url(${require('../../../static/news-card.jpg')});
  min-height: 20rem;
`
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: #e4e4e4;
  border-radius: 0 0 1rem 1rem;
  height: 7.25rem;
  padding: 1rem 0.75rem;
`
const Headline = styled.p`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.mercury};
  font-size: 1.5rem;
`
const Details = styled.p`
  color: ${theme.colors.black};
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 0.5rem;
`

export default () => (
  <>
    <Heading>San Francisco’s first high school hackathon is back.</Heading>
    <SplitLayout>
      <Half>
        <a
          href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php"
          target="_blank"
        >
          <ArticleCard>
            <Overlay>
              <Headline>
                ‘Hack the Fog’ makes history as San Francisco’s first high
                school hackathon
              </Headline>
              <Details>San Francisco Chronicle · March 5, 2018</Details>
            </Overlay>
          </ArticleCard>
        </a>
      </Half>
      <Half>
        <Lead>
          Last year, we ran Hack the Fog 1.0, San Francisco’s first high school
          hackathon — it was a massive success. Hack the Fog 2.0 is coming soon.
          Sign up below and we’ll email you when registration opens.
        </Lead>
        <EmailForm />
      </Half>
    </SplitLayout>
  </>
)
