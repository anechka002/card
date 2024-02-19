import styled from "styled-components";

type StyledTitlePropsType = {
  fontFamily: string
  fontSize: string
  color: string
  fontWeight: number
}

export const StyledTitle = styled.p<StyledTitlePropsType>`
  width: 70px;
  height: 19px;
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: 19.36px;
  color: ${props => props.color};
  margin-left: 10px;
  margin-top: 20px;
`