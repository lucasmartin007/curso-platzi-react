import React from 'react'
import ReactDOM from 'react-dom'

// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error'

import { App } from "./App";

import Context from "./Context";

// console.log("Empezamos. Curso de React");

//ReactDOM.render("Curso de React", document.body);

// ReactDOM.render("Curso de React avanzado", document.getElementById("div_app"));

// const rootElement = document.getElementById('div_app');
// const root = createRoot(rootElement);

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      })
    }
    return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      errorMiddleware,
      authMiddleware,
      new HttpLink({
        uri: 'https://petgram-server-gamma-three.vercel.app/graphql'
      })
    ])
})

// export const client = new ApolloClient({
    // uri:"https://petgram-server-gamma-three.vercel.app/graphql",
    // link: authLink.concat(httpLink),
    
    // request: operation => {
    //     const token = window.sessionStorage.getItem("token");
    //     const authorization = token ? `Bearer ${ token }` : "";
    //     operation.setContext({
    //         headers:{
    //             authorization
    //         }
    //     })
    // },
    // onError: error => {
    //     const { networkError } = error;
    //     if(networkError && networkError.result.code === "invalid_token"){
    //         window.sessionStorage.removeItem("token");
    //         window.location.href = "/";
    //     }
    // },

    
    // cache: new InMemoryCache()
// });
    

ReactDOM.render(
    <Context.Provider value={{ isAuth: false }}>
        <ApolloProvider client = { client }>
            <App />
        </ApolloProvider>
    </Context.Provider>
, document.getElementById("div_app"));

// root.render(<App />);
