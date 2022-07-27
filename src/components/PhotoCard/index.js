import React, { Fragment, useRef, useState, useEffect } from "react";

import { ImgWrapper, Img, Article } from "./styles";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { useNearScreen } from "../../hooks/useNearScreen";

import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

import { FavButton } from "../FavButton";
import { Link } from "@reach/router";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
    id, likes = 0, src = DEFAULT_IMAGE
}) => {
    // const element = useRef(null);

    // const [show, setShow] = useState(false);

    const [show, element] = useNearScreen();

    const key = `like-${id}`;

    // const [liked, setLiked] = useState(() => {
    //     try{
    //         const like = window.localStorage.getItem(key);
    //         return JSON.parse(like);
    //     }catch(error){
    //         return false;
    //     }
    // });

    const [liked, setLiked] = useLocalStorage(key, false);

    // console.log(liked);

    // const setLocalStorage = value => {
    //     try{
    //         window.localStorage.setItem(key, value);
    //         setLiked(value);
    //     }catch(error){
    //         console.error(error);
    //     }
    // }

    // const handleFavClick = () => setLiked(!liked);

    useEffect(function(){
        Promise.resolve(
            typeof window.IntersectionObserver !== "undefined" ? window.IntersectionObserver : import("intersection-observer"))
            .then(() => {
        // console.log("Use effect, PhotoCard");
        //console.log(element.current);
        const observer = new window.IntersectionObserver(function(entries){
            const { isIntersecting } = entries[0];
            //console.log(entries);
            //console.log(isIntersecting);
            if(isIntersecting){
                // console.log("Si");
                // setShow(true);
                observer.disconnect();
            }
        });
        observer.observe(element.current);
        });
    }, [element]);

    return (
        <Article ref = { element }>
            { show &&
            <Fragment>
                <Link to = { `/detail/${id}` }>
                    <ImgWrapper>
                        <Img src = { src } />
                    </ImgWrapper>
                </Link>

                <ToggleLikeMutation>
                {
                    (toggleLike) => {
                        const handleFavClick = () => {
                            !liked && toggleLike({ variables: { 
                                input: { id } 
                            } })
                            setLiked(!liked)
                        } 
                        return <FavButton liked = { liked } likes = { likes } onClick = { handleFavClick } />
                    }
                }
                </ToggleLikeMutation>

            </Fragment>
            }
        </Article>

    );
}
