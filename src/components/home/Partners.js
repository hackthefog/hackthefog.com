import React from 'react'

import styled from 'styled-components'
import { Heading, Subheading } from 'components/Text'

import { theme } from 'theme'
import Button from 'components/Button'
import Icon from '@hackclub/icons'
// import { Link } from 'gatsby'

import { partners as data } from 'data'

class Partners extends React.Component {
  render () {
    return (
      <div>
        <Heading>Partnered with:</Heading>
        <PartnerGroup
          logoSize={"20rem"}
          mLogoSize={"15rem"}
          data={data.platinum} />
        <div>
          <Subheading style={{
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "bolder"}}>
            Interested?
          </Subheading>
          <ContactWrapper>
            <ContactButton
              as="a"
              href={"mailto:contact@hackthefog.com"}>
              <Icon glyph="email-fill" /> Email
            </ContactButton>
            <ContactButton
              as="a"
              href="https://drive.google.com/a/hackclub.com/file/d/1rps92AMGXb3nEu9iWRpA3pDSAUi1XJYZ/view?usp=sharing">
              Prospectus
            </ContactButton>
          </ContactWrapper>
        </div>
      </div>
    );
  }
}

/**********************/
/***extra components***/
/**********************/
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  max-width: 30rem;
  margin: 2rem auto 0;

  ${theme.mediaQueries.lg} {
    flex-direction: row;
  }
`
const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: .5rem 2rem;
  background-color: ${theme.colors.gray[8]};
  &:first-of-type {
    margin-bottom: 1rem;
  }
  &:last-of-type {
    padding-bottom: calc(.5rem + 2px);
  }
  svg { margin-right: .5rem; margin-bottom: 2px; }
  ${theme.mediaQueries.lg} {
    font-size: 2rem;
    padding: .5rem 2rem;
    &:first-of-type {
      margin-bottom: auto;
    }
    svg { margin-bottom: 4px; }
  }
`

const PartnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 2rem 0;
`
const StyledAnchor = styled.a`
  display: block;
  padding: 1rem;
  width: ${props => props.mSize || props.size || "initial"};
  height: ${props => props.mSize || props.size || "initial"};
  img {
    width: 100%;
  }
  ${theme.mediaQueries.lg} {
    width: ${props => props.size || "initial"};
    height: ${props => props.size || "initial"};
  }
`
const PartnerLink = (props) =>
  (<StyledAnchor href={props.href} size={props.size} mSize={props.mSize}>
    <img src={props.src} alt={props.alt} />
  </StyledAnchor>);


class PartnerGroup extends React.Component {
  constructor () {
    super();
    this.state = {
      partners: []
    };
  }
  componentDidMount () {
    for (let i in this.props.data) {
      import (`images/partners/${this.props.data[i].img}`)
        .then(img => {
          let partners = this.props.data;
          partners[i].imgURL = img.default;
          this.setState({partners});
        });
    }
  }
  render () {
    return (
      <PartnerWrapper>
        {this.state.partners.map(p =>
          <PartnerLink
            key={p.name}
            href={p.url}
            src={p.imgURL}
            alt={p.name}
            size={this.props.logoSize}
            mSize={this.props.mLogoSize} />
        )}
      </PartnerWrapper>
    );
  }
}

export default Partners;
