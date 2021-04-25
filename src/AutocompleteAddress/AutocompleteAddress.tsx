import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@material-ui/core";
import styled from "styled-components";
import {InputForm} from "./InputAddressForm/InputAddressForm";
import {getNewAddressState} from "./HelperFunctions";
import EditIcon from '@material-ui/icons/Edit';
import {SuccessSnackBar} from "./SuccessSnackBar/SuccessSnackBar";


const StyledTextField = styled(TextField)`
  width: 500px;
`
const StyledSpan = styled.div`
  font-size: medium
`
const ErrorInput = styled.div`
  color: red
`


export const AutocompleteAddress = () => {

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isSelectAddress, setIsSelectAddress] = useState<boolean>(false)
    const [state, setState] = useState<initStateType>({
        street: "", home: "", district: "", locality: "", area: "", region: "", country: "",
    })
    const [address, setAddress] = useState<string>("")
    const [errorAddress, setErrorAddress] = useState<string>("")
// @ts-ignore
    let autocomplete = null

    useEffect(() => {
        // @ts-ignore
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        autocomplete.addListener("place_changed", handlePlaceSelect)
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
    }
    return (
        <div>
            <h1>Add New Address</h1>
            <StyledTextField id="autocomplete"
                             variant="outlined"
                             type="text"
                             onChange={onChangeInput}

            />
            <ErrorInput> {errorAddress}</ErrorInput>
            {isSelectAddress && <div>
                <StyledSpan> вы выбрали разбитый по структуре адрес </StyledSpan> <Button
                onClick={handleRedact}><EditIcon/>редактировать</Button>
                {isEdit &&
                <InputForm setAddress={setAddress} setIsSelectAddress={setIsSelectAddress} state={state}/>}
            </div>}
            {address && <SuccessSnackBar text={address}/>}
        </div>
    )
}

export type initStateType = {
    street: string,
    home: string,
    district: string
    locality: string
    area: string
    region: string
    country: string

}
