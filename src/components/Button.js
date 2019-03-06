import styled from 'styled-components'
import { theme } from '../theme'

export default styled.a`
  cursor: pointer;
  margin-left: 16px;
  margin-top: 0px;
  line-height: 1.25;
  border-radius: 4px !important;
  box-shadow: none !important;
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.white};
  background-color: ${props =>
    props.disabled ? theme.colors.gray[2] : theme.colors.primary};
`
