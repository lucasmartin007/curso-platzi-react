import { useEffect, useState, useRef } from "react";

export function useNearScreen(){
    const element = useRef(null);
    const [show, setShow] = useState(false);

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
                setShow(true);
                observer.disconnect();
            }
        });
        observer.observe(element.current);
        });    
    }, [element]);

    return [show, element];
}
