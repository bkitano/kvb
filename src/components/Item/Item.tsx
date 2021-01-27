import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

type ItemProps = {
    name: string,
    price: number,
    image: string,
}

const Item = (props: ItemProps) => {

    const {name, price, image} = props;

    return (
        <Card>
            <CardMedia image={image} title={name} />
            <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography variant='h6'>${price}</Typography>
            </CardContent>
        </Card>
    )
}

export { Item }