import React from 'react';
import styled, {css} from 'styled-components';
import {AppProvider, AppContext} from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div `
    display: grid; 
    margin-bottom: 40px; 
    grid-template-columns: 180px auto 100px 180px;
`

const ControlButtomElem = styled.div`
    cursor: pointer; 
    ${proops => proops.active && css`
        text-shadow: 0px 0px 60px #03ff03;
    `}
`

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
            <ControlButtomElem active={page === name} onClick={() => setPage(name)}>
                {toProperCase(name)}
            </ControlButtomElem>
            )}
        </AppContext.Consumer>
    )
}

export default function() {
    return (
    <Bar>
        <Logo> CryptoDash </Logo>
        <div></div>
        <ControlButton active name="dashboard"></ControlButton>
        <ControlButton name="settings"></ControlButton>
    </Bar>
    )
}


