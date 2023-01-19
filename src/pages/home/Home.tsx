import React, {useState} from 'react';
import  s from  './home.module.scss';
import {Cards} from "../../components/cards/cards";
import {Search} from "../../components/search/search";
import {ResultLine} from "../../components/resultLine/resultLine";
import useProducts from "../../hooks/useProducts";
import {IProducts} from "../../components/cards/cards";


export const Home = () => {
    const [filter, setFilter]=useState('')

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setFilter(event.target.value)
    }
    const {products,loading,error}=useProducts()


    if(loading) return <h1 style={{textAlign:"center"}}>Loading</h1>
    if(error){
        console.log("error", error);
        return null
    }


    return (
        <div className={s.container}>
            <Search handleChange={handleChange} filter={filter}/>
            <ResultLine length={products.length}/>
            <div className={s.cont_card}>
                {products.map((product: IProducts) => {
                    return( <Cards product={product} key={product.id} filter={filter}  />)
                })}
            </div>

        </div>

    );
};