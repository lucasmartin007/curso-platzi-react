import React, { useContext } from "react";

import { Context } from "../Context";

import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context);
    return(
        <>
            <RegisterMutation>
                {
                    (register, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            register({ variables }).then(({ data }) => {
                                const { signup } = data
                                activateAuth(signup)
                            } )
                        }
                        const errorMessage = error && "El usuario ya existe o hay algun problema.";
                        return <UserForm disabled = { loading } error = { errorMessage } title = "Registrarse" onSubmit = { onSubmit } />
                    }
                }
            </RegisterMutation>
            <LoginMutation>
                {
                    (login, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            login({ variables }).then(({ data }) => {
                                const { login } = data
                                activateAuth(login)
                            })
                        }
                        const errorMessage = error && "La contraseña no es correcta o el usuario no existe.";
                        return <UserForm disabled = { loading } error = { errorMessage } title = "Iniciar sesion" onSubmit = { onSubmit } />
                    }
                }
            </LoginMutation>
        </>
    )
}
