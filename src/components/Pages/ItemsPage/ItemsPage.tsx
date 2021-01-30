import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { map } from 'lodash';
import React from 'react';

import { Item, ItemView } from '../../Item';

type ItemsPageProps = {
    items: Item[];
}

const useStyles = makeStyles({
    container: {
        margin: 0,
        width: '100%'
    },
})

const ItemsPage = (props: ItemsPageProps) => {

    const { items } = props;

    const classes = useStyles();

    return <Grid container justify='center' spacing={2} className={classes.container}>
        {map(items, (item: Item, key) => {
            return (
                <Grid item xs key={key} >
                    <ItemView {...item} />
                </Grid>
            )
        })}
    </Grid>
}

export { ItemsPage, ItemsPageProps }