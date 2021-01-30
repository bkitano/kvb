import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

type Item = {
    name: string,
    price: number,
    image: string,
}

const useStyles = makeStyles({

    card: {
        // float: 'left',
        // width: '40rem',
        margin: '1rem',
        // maxWidth: '150px',
    },
    image: {
        height: '10rem',
    }

});

const ItemView = (props: Item) => {

    const { name, price, image } = props;

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia image={image} className={classes.image} />
            <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography variant='h6'>${price}</Typography>
            </CardContent>
        </Card>
    )
}

export { ItemView, Item }