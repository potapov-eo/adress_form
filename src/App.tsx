import React from 'react';
import {AutocompleteAddress} from "./AutocompleteAddress/AutocompleteAddress";
import styled from "styled-components";


const StyledApp = styled.div`
  text-align: center;
`

function App() {
    return (
        <StyledApp>
            <AutocompleteAddress/>
        </StyledApp>
    );
}

export default App;
