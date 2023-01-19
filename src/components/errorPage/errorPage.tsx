import * as React from'react';
import {Link} from "react-router-dom";


export const Error = () => {
    return (
        <div className="container">
            <div style={{display:'flex', flexDirection:"column", alignItems: "center"}}>
                <div style={{display:"flex", flexDirection:'column', alignItems:"center", gap:10}}>
                    <h1 style={{fontSize:40, color:'red'}}>Page is not found</h1>
                    <Link to={"/"} style={{color:'black', fontSize:14, textDecoration:"underline"}}>Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};