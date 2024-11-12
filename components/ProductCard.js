import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import {useState} from "react";
import Link from "next/link";

function ReserveForm({onReserve}) {

    const [name, setName] = useState("")

    return (
        <>
            <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Kdo rezervuje" size={"small"} variant="outlined"/> <Button disabled={!name} variant="contained"
                                                                                         onClick={() => onReserve(name)}>Rezervovat</Button>
        </>
    )

}

export default function ProductCard(
    {image, title, price,link, isReserved, onReserve}
) {
    return (
        <Card variant="outlined" sx={{maxWidth: 500}}>
            <CardMedia
                component="img"
                height="400"
                image={image}

            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" sx={{color: 'text.secondary'}}>
                    Přibližná cena: {price} Kč
                </Typography>
                <Link href={link} >Odkaz do e-shopu</Link>
            </CardContent>
            <CardActions>
                {!isReserved ? <ReserveForm onReserve={onReserve}/> : "Rezervovano"}
            </CardActions>
        </Card>
    );
}