import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
// import {image} from "./../../data/7f1e6f69a0251d2342c1212a131113d4.webp"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import s from "./info.module.scss";
import img from "./../../data/7f1e6f69a0251d2342c1212a131113d4.webp"




export const Info = () => {
    const [state, setState]=useState <any> ([])
    const location = useLocation();
    const { from } = location.state;
    const {description, title} = state;
    console.log(state)

    useEffect(() => {
        if (from) {
            axios.get(`https://fakestoreapi.com/products/${from}`).then((response) => {
                setState(response.data);
            });
        }
    }, [from]);


    return (
        <div>
            <div>
                <img src={img} className={s.foto} />
            </div>

            <div className={s.description_block}>
                {state &&
                    <>
                        <h2>{title}</h2>
                        <p className={s.description}>{description}</p>
                    </>
                }
            </div>

            <div className={s.link_home_block}>
                <ArrowBackIcon />
                <Link to={'/'} className={s.link_home}>Back to home</Link>
            </div>


        </div>
    );
};
