import React, {useState} from 'react'
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {initStateType} from "../AutocompleteAddress";
import * as yup from 'yup';
import {SuccessSnackBar} from "../SuccessSnackBar/SuccessSnackBar";


type InputFormPropsType = {
    state: initStateType
}

const validationSchema = yup.object({
    street: yup
        .string()
        .required('это поле обязательно для заполнения'),
    home: yup
        .string()
        .required('это поле обязательно для заполнения'),
    district: yup
        .string()
        .required('это поле обязательно для заполнения'),
    locality: yup
        .string()
        .required('это поле обязательно для заполнения'),
    area: yup
        .string()
        .required('это поле обязательно для заполнения'),
    region: yup
        .string()
        .required('это поле обязательно для заполнения'),
    country: yup
        .string()
        .required('это поле обязательно для заполнения'),
});
export const InputForm = (props: InputFormPropsType) => {
    const [address, setAddress] = useState<string>("")
    const formik = useFormik({
        initialValues: props.state,
        validationSchema: validationSchema,
        onSubmit: values => {
            debugger
            formik.resetForm()
            setAddress(`вы выбрали адрес- город: ${formik.values.locality}, улица: ${formik.values.street},
             дом: ${formik.values.home}`)

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
                    error={formik.touched.street && Boolean(formik.errors.street)}
                    helperText={formik.touched.street && formik.errors.street}
                /></div>
                <div><TextField
                    name={"home"}
                    value={formik.values.home}
                    placeholder={"дом"}
                    onChange={formik.handleChange}
                    error={formik.touched.home && Boolean(formik.errors.home)}
                    helperText={formik.touched.home && formik.errors.home}
                /></div>
                <div><TextField
                    name={"district"}
                    value={formik.values.district}
                    placeholder={"Район"}
                    onChange={formik.handleChange}
                    error={formik.touched.district && Boolean(formik.errors.district)}
                    helperText={formik.touched.district && formik.errors.district}
                /></div>
                <div><TextField
                    name={"locality"}
                    value={formik.values.locality}
                    placeholder={"Город"}
                    onChange={formik.handleChange}
                    error={formik.touched.locality && Boolean(formik.errors.locality)}
                    helperText={formik.touched.locality && formik.errors.locality}
                /></div>
                <div><TextField
                    name={"area"}
                    value={formik.values.area}
                    placeholder={"Район"}
                    onChange={formik.handleChange}
                    error={formik.touched.area && Boolean(formik.errors.area)}
                    helperText={formik.touched.area && formik.errors.area}
                /></div>
                <div><TextField
                    name={"region"}
                    value={formik.values.region}
                    placeholder={"Область"}
                    onChange={formik.handleChange}
                    error={formik.touched.region && Boolean(formik.errors.region)}
                    helperText={formik.touched.region && formik.errors.region}
                /></div>

                <div><TextField
                    name={"country"}
                    value={formik.values.country}
                    placeholder={"Стран"}
                    onChange={formik.handleChange}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                /></div>
                <Button type="submit">Далее</Button>
            </form>
            {address && <SuccessSnackBar text={address}/>}
        </div>
    )
}

