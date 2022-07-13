import React from 'react'
import ReactDOM from 'react-dom'

// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { App } from "./App";

// console.log("Empezamos. Curso de React");

//ReactDOM.render("Curso de React", document.body);

// ReactDOM.render("Curso de React avanzado", document.getElementById("div_app"));

// const rootElement = document.getElementById('div_app');
// const root = createRoot(rootElement);

export const client = new ApolloClient({
    uri:"https://petgram-server-gamma-three.vercel.app/graphql",
    cache: new InMemoryCache()
});
    

ReactDOM.render(
    <ApolloProvider client = { client }>
        <App />
    </ApolloProvider>
, document.getElementById("div_app"));

// root.render(<App />);
