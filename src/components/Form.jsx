import { useEffect, useState } from "react";

export default function Form() {   

    const [data,setData]=useState({});
    useEffect(()=>{
        fetch("/products")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fetching data:", error));

    },[])

    return (
        <>
        
            <span>Name: {data.id}</span>
            <br/>
            <span>Age: {data.product}</span>
            
        </>
    );
}
