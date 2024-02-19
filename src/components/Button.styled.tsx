import styled, { css } from "styled-components";

type StyledButtonPropsType = {
  color?: string
  btnType: 'primary' | 'secondary'
  active?: boolean
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
}

export const StyledButton = styled.button<StyledButtonPropsType>`
  margin-left: 10px;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  line-height: 20px;

  ${props => props.btnType === 'secondary' && css<StyledButtonPropsType>`
    border: 2px solid ${props => props.color || '#4E71FE'};
    background-color: transparent;
    color: ${props => props.color || '#4E71FE'};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    font-family: ${props => props.fontFamily};

    &:hover {
      border-color: #4E71FE;
      color: white;
      background-color: #4E71FE;
    }
  `}

  ${props => props.btnType === 'primary' && css<StyledButtonPropsType>`
    background-color: ${props => props.color || '#4E71FE'};
    color: white;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    font-family: ${props => props.fontFamily};

    &:hover {
      border: 2px solid ${props => props.color || '#4E71FE'};
      background-color: transparent;
      border-color: #4E71FE;
      color: #4E71FE;
    }
  `}

  /* ${props => props.active && css<StyledButtonPropsType>`
    box-shadow: 2px 2px 2px #ccc;
  `} */
`