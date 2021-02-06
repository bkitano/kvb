import { Avatar, Card, CardContent, CardHeader, CardMedia, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

type ItemHeader = {
    source: string,
    date: string,
    avatar?: string
}

type Item = {
    name: string,
    price?: number,
    image: string,
    link: string,
    showHeader?: boolean,
} & ItemHeader;

const useStyles = makeStyles({

    card: {
        margin: '1rem',
    },
    imageContainer: {
        position: 'relative',
        width: '50%',
    },
    after: {
        content: "''",
        display: 'block',
        paddingBottom: '100%',
    },
    image: {
        height: 'fit',
        objectFit: 'cover',
        width: 'fit',
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        position: 'absolute',
        borderRadius: 0,
    },
});

const ItemView = (props: Item & ItemHeader) => {

    const { name, price, image, link, source, date, avatar, showHeader } = props;

    const classes = useStyles();

    return (
        <Card classes={{ root: classes.card }}>
            {/* <Card  className={classes.card}> */}
            <CardHeader hidden={showHeader} title={source} subheader={date}
                avatar={<Avatar alt={source} src={avatar} />} />
            <CardMedia >
                <div className={classes.imageContainer}>
                    <img src={image} className={classes.image} />
                    <div className={classes.after}/>
                </div>
            </CardMedia>
            <Link component='a' href={link}>
                <CardContent>
                    <Typography variant='h5'>{name}</Typography>
                    {price && <Typography variant='h6'>${price}</Typography>}
                </CardContent>
            </Link>
        </Card>
    )
}

export { ItemView, Item }