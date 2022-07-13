import React, { Fragment, useEffect, useState } from "react";

import { Category } from "../Category";

import { List, Item } from "./styles";

// import { categories } from "../../../api/db.json";
// import { categories as mockCategories } from "../../../api/db.json";


function useCategoriesData(){
    const [loading, setLoading] = useState(true);
    
    const [categories, setCategories] = useState([]);
    
    useEffect(function(){
        setLoading(true);
        window.fetch("https://petgram-server-gamma-three.vercel.app/categories")
        .then(res => res.json())
        .then(res => {
            setCategories(res);
            setLoading(false);
        });
    }, []);
    
    return { categories, loading };
}

export const ListOfCategories = () => {
    // const [categories, setCategories] = useState([]);

    const { categories, loading } = useCategoriesData();

    const [showFixed, setShowFixed] = useState(false);

    // useEffect(function(){
    //     window.fetch("https://petgram-server-gamma-three.vercel.app/categories")
    //     .then(res => res.json())
    //     .then(res => {
    //         setCategories(res);
    //     });
    // }, []);

    useEffect(function(){
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        
        document.addEventListener("scroll", onScroll);
        
        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);
    
    const renderList = ( (fixed) => {
        // console.log("Fixed?: " + fixed);
        return (
            <List className={fixed ? 'fixed' : ''}>
            {/* <List fixed={fixed}> */}
            {
              loading
                ? <Item key='loading'><Category /></Item>
                : categories.map(category => <Item key={category.id}><Category {...category} path = { `/pet/${ category.id }` } /></Item>)
            }
          </List>
    )
    } );

    if(loading){
        return "Cargando...";
    }

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
    }
// };
