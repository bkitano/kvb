import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { map } from 'lodash';
import React from 'react';

import { Item, ItemView } from '../Item';

type ItemsGridProps = {
    items: Item[];
}

const useStyles = makeStyles({
    container: {
    },
})

const ItemsGrid = (props: ItemsGridProps) => {

    const { items } = props;

    const classes = useStyles();

    return <Grid container justify='center' spacing={2} className={classes.container}>
        {map(items, (item: Item, key) => {
            return (
                <Grid item xs={12} sm={10} md={8} key={key} >
                    <ItemView {...item} />
                </Grid>
            )
        })}
    </Grid>
}

export { ItemsGrid, ItemsGridProps }