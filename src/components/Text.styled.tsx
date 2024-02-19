import styled from "styled-components";

type StyledTextPropsType = {
  color: string
  fontFamily: string
  fontSize: string
  fontWeight: number
}

export const StyledText = styled.p<StyledTextPropsType>`
  width: 260px;
  height: 40px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: 20px;
  color: ${props => props.color};
  margin-left: 10px;
  margin-top: 20px;
`