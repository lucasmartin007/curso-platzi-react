import React from "react";

import Context from "../Context";

import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
    return(
        <Context.Consumer>
            {
                ({ isAuth, activateAuth }) => {
                    return (
                        <>
                            <RegisterMutation>
                                {
                                    (register) => {
                                        const onSubmit = ({ email, password }) => {
                                            const input = { email, password }
                                            const variables = { input }
                                            register({ variables }).then(activateAuth)
                                        }
                                        return <UserForm title = "Registrarse" onSubmit = { onSubmit } />
                                    }
                                }
                            </RegisterMutation>
                            <UserForm title = "Iniciar sesion" onSubmit = { activateAuth } />
                        </>
                    )
                }
            }
        </Context.Consumer>
    )
}
