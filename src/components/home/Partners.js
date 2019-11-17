import React from 'react'

import styled from 'styled-components'
import { Heading, Subheading } from 'components/Text'

import { theme } from 'theme'
// import Button from 'components/Button'
// import { Link } from 'gatsby'

import { partners as data } from 'data'

class Partners extends React.Component {
  render () {
    return (
      <div>
        <Heading>Partners</Heading>
        <PartnerGroup
          logoSize={"20rem"}
          mLogoSize={"15rem"}
          data={data.platinum}
          header={"Venue:"} />
      </div>
    );
  }
}

/**********************/
/***extra components***/
/**********************/

const PartnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
const PartnerHeading = styled(StyledAnchor)`
  background-color: ${theme.colors.gray[2]};
  color: ${theme.colors.gray[8]}
  font-size: calc(${props => props.mSize || props.size || "initial"} / 6);
  padding: 2rem;
  border: .5rem solid ${theme.colors.gray[3]};
  ${theme.mediaQueries.lg} {
    font-size: calc(${props => props.size || "initial"} / 6);
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
    console.log(this.state.partners);
    return (
      <div>
        <PartnerWrapper>
          <PartnerHeading
            as="div"
            size={this.props.logoSize}
            mSize={this.props.mLogoSize}>
            {this.props.header}
          </PartnerHeading>
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
      </div>
    );
  }
}

export default Partners;
