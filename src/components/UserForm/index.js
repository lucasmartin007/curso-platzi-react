import React, { Fragment } from "react";

import { useInputValue } from "../../hooks/useInputValue";

import { Title, Form, Input, Button } from "./styles";

export const UserForm = ({ title, onSubmit }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }
    
    return(
        <Form onSubmit = { handleSubmit }>
            <Title>{ title }</Title>
            <Input placeholder = "Email" { ...email } />
            <Input type = "password" placeholder = "Password" { ...password } />
            <Button>{ title }</Button>
        </Form>
    )
}
