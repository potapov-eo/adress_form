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
  font-size:medium
`
export const AutocompleteAddress = () => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
       const [isSelectAddress, setIsSelectAddress] = useState<boolean>(false)
    const [state, setState] = useState<initStateType>({
        street: "", home: "", district: "", locality: "", area: "", region: "", country: "",
    })
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
        const stateWithAddress = getNewAddressState(addressObject)
        setState({...state, ...stateWithAddress})
        setIsSelectAddress(true)
    }
    const handleRedact = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div>Ольшевского
            <h1>Add New Address</h1>
            <StyledTextField id="autocomplete"
                             variant="outlined"
                             className="input-field"
                             type="text"/>

            {isSelectAddress && <div>
                <StyledSpan> вы выбрали разбитый по структуре адрес </StyledSpan> <Button
                onClick={handleRedact}><EditIcon/>редактировать</Button>
            </div>}
            {isEdit && <InputForm state={state}/>}
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
