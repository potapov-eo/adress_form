import React from 'react';
import styled from "styled-components";
import AutocompleteAddress from "./AutocompleteAddress/AutocompleteAddress";
import { createMuiTheme } from '@material-ui/core/styles';
import {purple} from "@material-ui/core/colors";


const StyledApp = styled.div`
  text-align: center;
  
`
const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[300],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },

    },
});


function App() {

    return (
        <StyledApp>
            <AutocompleteAddress theme={theme} />
        </StyledApp>
    )
}

export default App;
