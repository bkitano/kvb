import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { map } from 'lodash';
import React from 'react';

import { SquareItemView, Item } from '../SquareItem';
import { ListItemView } from '../ListItem';

type ItemsFeedProps = {
    items: Item[];
    variant: 'feed' | 'list';
}

const useStyles = makeStyles({
    container: {
    },
})

const ItemsFeed = (props: ItemsFeedProps) => {

    const { items, variant } = props;

    const classes = useStyles();

    return <Grid container justify='center' spacing={2} className={classes.container}>
        { map(items, (item: Item, key) => {
            return (
                <Grid item xs={12} sm={10} md={8} key={key} >
                    {variant === 'feed' ? 
                        <SquareItemView {...item} /> : 
                        <ListItemView {...item}/>}
                </Grid>
            )
        })}
    </Grid>
}

export { ItemsFeed, ItemsFeedProps }