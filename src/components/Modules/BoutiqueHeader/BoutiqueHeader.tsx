import { Avatar, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

type BoutiqueHeaderProps = {
    name: string,
    image: string,
}

const useStyles = makeStyles({
    header: {
        marginTop: '2rem',
        marginBottom: '2rem'
    }
})

const BoutiqueHeader = (props: BoutiqueHeaderProps) => {
    const { name, image } = props;
    const classes = useStyles();

    return (
        <Grid direction='row' container alignItems='center' spacing={0} justify='flex-start' className={classes.header}>
            <Grid item xs={1}>
                <Avatar alt={name} src={image} />
            </Grid>
            <Grid item >
                <Typography variant='h4'>{name}</Typography>
            </Grid>
        </Grid>
    )
}

export { BoutiqueHeader }