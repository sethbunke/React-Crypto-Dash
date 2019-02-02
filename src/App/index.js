import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
//import styled, {css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

// const MyButton = styled.div `
//   color: green;
//   ${props => props.primary && css`
//     background: yelllow;
//     color: palevioletred;
//   `}
// `
// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;


class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppBar></AppBar>
          <WelcomeMessage name="CryptoDash"/>
        </AppLayout>
        
        {/* <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
        <TomatoButton>Tomato</TomatoButton> */}
      </div>
    );
  }
}

export default App;
