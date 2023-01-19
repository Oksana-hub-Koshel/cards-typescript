import * as React from'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import  s from './cards.module.scss';
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom'
import {useCallback, useMemo} from "react";
import {HighLight} from "../../logic/logic";


export interface IProducts {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating:
        {
            rate: number,
            count:number }
    title: string,
}
interface ICardsProps {
    product: IProducts,
    filter: string,

}

export const Cards = ({product, filter}: ICardsProps) => {

    const light=useCallback((str: string) =>{
        return <HighLight filter={filter} str={str} />

    },[filter])



    return (
        <div className={s.container_cards}>
            <Card sx={{ maxWidth: 400  }}>

                <img src={product.image} className={s.image}/>

                <CardContent>
                    <div style={{display:"flex", gap:5, color:"gray", marginBottom:5}}>
                        <DateRangeOutlinedIcon/>
                        <Typography>Time</Typography>
                    </div>

                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:18, marginTop:20, marginBottom:20, height:40,  fontFamily: "Source Sans Pro"}}>
                        {light(product.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={s.descrip_text} style={{fontFamily: "Source Sans Pro"}} >
                        {light(product.description)}
                    </Typography>
                </CardContent>
                <CardActions style={{display:'flex', alignItems:"center", }}>

                    <Link
                        to={`/products/${product.id}`}
                        state={{ from: `${product.id}` }} style={{textDecoration:"none"}}>
                        <Button size="small" style={{color:'black', fontWeight:"bolder"}}>Read more</Button>
                    </Link>
                    <EastIcon style={{width:15}}/>
                </CardActions>
            </Card>

        </div>
    );
};
