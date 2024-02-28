import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledButton } from './components/Button.styled';
import { StyledText } from './components/Text.styled';
import { myTheme } from './components/styles/Theme.styled';
import { StyledTitle } from './components/Title.styled';
import { Img } from './components/Img.styled';
import img from './assets/images/Rectangle 1.png'


function App() {
  return (
    <div className='App'>
      <Box>
        <Img src={img}/>
        <StyledTitle
          fontSize={myTheme.size.large}
          color={myTheme.colors.gray.black}
          fontWeight={myTheme.weight.large}
          fontFamily={myTheme.fontFamily}>Headline</StyledTitle>
        <StyledText 
          color={myTheme.colors.gray.light}
          fontSize={myTheme.size.middle}
          fontWeight={myTheme.weight.middle} 
          fontFamily={myTheme.fontFamily}>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
        </StyledText>
        <StyledButton 
          color={myTheme.colors.primary} 
          btnType={'primary'} 
          fontFamily={myTheme.fontFamily}
          fontSize={myTheme.size.little}
          fontWeight={myTheme.weight.large}
          active
          >See more
        </StyledButton>
        <StyledButton 
          color={myTheme.colors.secondary} 
          btnType={'secondary'}
          fontFamily={myTheme.fontFamily}
          fontSize={myTheme.size.little}
          fontWeight={myTheme.weight.large}
          active
          >Save
        </StyledButton>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  width: 300px;
  height: 350px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;

  button {
    cursor: pointer;
  }
`
// Hello my friends