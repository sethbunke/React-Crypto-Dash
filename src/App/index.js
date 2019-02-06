import React, { Component } from 'react';
import './App.css';
import Settings from '../Settings';
//import styled, {css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';

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
          <AppProvider>
            <AppBar/>
            <Settings/>
          </AppProvider>
          
        </AppLayout>
        
        {/* <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
        <TomatoButton>Tomato</TomatoButton> */}
      </div>
    );
  }
}

export default App;
