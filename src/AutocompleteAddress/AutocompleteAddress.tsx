import React, {useEffect, useState} from 'react'
import {Button, TextField, Theme} from "@material-ui/core";
import styled from "styled-components";
import {InputForm} from "./InputAddressForm/InputAddressForm";
import {getNewAddressState} from "./HelperFunctions";
import EditIcon from '@material-ui/icons/Edit';
import {SuccessSnackBar} from "./SuccessSnackBar/SuccessSnackBar";
import {ThemeProvider} from '@material-ui/core/styles';

export type initStateType = {
    street: string,
    home: string,
    district: string
    locality: string
    area: string
    region: string
    country: string

}
const StyledTextField = styled(TextField)`
  width: 500px;
`
const StyledSpan = styled.div`
  font-size: medium
`
const ErrorInputMessage = styled.div`
  color: red
`
type AutocompleteAddressType = { theme: Theme }

const AutocompleteAddress = (props: AutocompleteAddressType) => {
    const [state, setState] = useState<initStateType>({
        street: "", home: "", district: "", locality: "", area: "", region: "", country: ""
    })
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isSelectAddress, setIsSelectAddress] = useState<boolean>(false)
    const [address, setAddress] = useState<string>("")
    const [errorAddress, setErrorAddress] = useState<string>("")

    let autocomplete:any

    useEffect(() => {
          // @ts-ignore
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        autocomplete.addListener("place_changed", handlePlaceSelect)

        return () => autocomplete.removeEventListener("place_changed", handlePlaceSelect);
    }, [])


    const handlePlaceSelect = () => {
        // @ts-ignore
        let addressObject = autocomplete.getPlace()
        if (addressObject.address_components) {
            const stateWithAddress = getNewAddressState(addressObject)
            setState({...state, ...stateWithAddress})
            setIsSelectAddress(true)
        } else setErrorAddress("Необходимо выбрать адрес из списка")
    }
    const handleRedact = () => {
        setIsEdit(!isEdit)
    }
    const onChangeInput = () => {
        setIsSelectAddress(false)
        setErrorAddress("")
        setIsEdit(false)
        setAddress("")
    }
    return (
        <ThemeProvider theme={props.theme}>
            <div>
                <h1>Add New Address</h1>
                <StyledTextField id="autocomplete"
                                 color="secondary"
                                 variant="outlined"
                                 type="text"
                                 onChange={onChangeInput}
                />
                <ErrorInputMessage> {errorAddress}</ErrorInputMessage>
                {isSelectAddress && <div>
                    <StyledSpan> вы выбрали разбитый по структуре адрес </StyledSpan> <Button
                    onClick={handleRedact}><EditIcon/>редактировать</Button>
                    {isEdit &&
                    <InputForm setAddress={setAddress} setIsSelectAddress={setIsSelectAddress} state={state}/>}
                </div>}
                {address && <SuccessSnackBar text={address}/>}
            </div>
        </ThemeProvider>
    )
}

export default AutocompleteAddress;

