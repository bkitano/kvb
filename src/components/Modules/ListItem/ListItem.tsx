import React from 'react';

import { Item } from '../SquareItem';
import { Card, Typography, CardHeader, CardMedia, CardContent, IconButton, CardActions } from '@material-ui/core';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { AddShoppingCart, Bookmark, BookmarkBorderOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    cover: {
        width: 151,
    },
    content: {
        width: '100%'
    },
    items: {
        float: 'right'
    },
})

const ListItemView = (props: Item) => {

    const { name, date, image } = props;

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia>
                <img src={image} className={classes.cover} />
            </CardMedia>
            <CardHeader title={name} subheader={date} />
            <CardContent >
                <IconButton className={classes.items}>
                    <AddShoppingCart />
                </IconButton>
                <IconButton className={classes.items}>
                    <BookmarkBorderOutlined />
                </IconButton>
            </CardContent>
        </Card>
    )
}

export { ListItemView };