import React from 'react'
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import {initStateType} from "../AutocompleteAddress";


type InputFormPropsType = {
    state: initStateType
}
export const InputForm = (props: InputFormPropsType) => {

    const formik = useFormik({
        initialValues: props.state,

        onSubmit: values => {
            formik.resetForm()
            console.log(values)
        }
    })
    return (
        <div>INPUT FORM

            <form onSubmit={formik.handleSubmit}>
                <div><TextField
                    name={"street"}
                    value={formik.values.street}
                    placeholder={"Улица"}
                    onChange={formik.handleChange}
                /></div>
                <div><TextField
                    name={"home"}
                    value={formik.values.home}
                    placeholder={"дом"}
                    onChange={formik.handleChange}
                /></div>
                <div><TextField
                    name={"district"}
                    value={formik.values.district}
                    placeholder={"Район"}
                    onChange={formik.handleChange}
                /></div>
                <div><TextField
                    name={"locality"}
                    value={formik.values.locality}
                    placeholder={"Город"}
                    onChange={formik.handleChange}
                /></div>
                <div><TextField
                    name={"area"}
                    value={formik.values.area}
                    placeholder={"Район"}
                    onChange={formik.handleChange}
                /></div>
                <div><TextField
                    name={"region"}
                    value={formik.values.region}
                    placeholder={"Область"}
                    onChange={formik.handleChange}
                /></div>

                <div><TextField
                    name={"country"}
                    value={formik.values.country}
                    placeholder={"Стран"}
                    onChange={formik.handleChange}
                /></div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

