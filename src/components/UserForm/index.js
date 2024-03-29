import React, { Fragment } from "react";

import { useInputValue } from "../../hooks/useInputValue";

import { Title, Form, Input, Error } from "./styles";

import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ error, disabled, title, onSubmit }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }
    
    return(
        <Form disabled = { disabled } onSubmit = { handleSubmit }>
            <Title>{ title }</Title>
            <Input disabled = { disabled } placeholder = "Email" { ...email } />
            <Input disabled = { disabled } type = "password" placeholder = "Password" { ...password } />
            <SubmitButton disabled = { disabled }>{ title }</SubmitButton>
            { error && <Error>{ error }</Error> }
        </Form>
    )
}
