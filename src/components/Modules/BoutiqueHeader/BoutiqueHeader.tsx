import { Avatar, Card, Chip, CardHeader, Grid, Theme, Typography, CardContent } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { map } from 'lodash';

type BoutiqueHeaderProps = {
    name: string,
    image?: string,
    bio?: string,
    chips?: string[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    header: {
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    chips: {
        '& > *': {
            margin: theme.spacing(.5),
        }
    },
    bio: {
        margin: theme.spacing(1)
    }
}))

const BoutiqueHeader = (props: BoutiqueHeaderProps) => {
    const { name, image, bio, chips } = props;
    const classes = useStyles();

    return (
        <Grid container justify='center' spacing={2} >
            <Grid item xs={12} sm={10} md={8} >

                <Card>
                    <CardHeader
                        title={
                            <Typography variant='h2'>
                                {name}
                            </Typography>
                        }
                        subheader={
                            <div className={classes.chips}>
                                {map(chips, (chip: string, key) =>
                                    <Chip label={chip} key={key} />
                                )}
                            </div>
                        }
                        avatar={
                            <Avatar
                                alt={name}
                                className={classes.large}
                                src={image} />
                        } />
                    <CardContent>
                        <Typography className={classes.bio} variant='h6'>{bio}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export { BoutiqueHeader, BoutiqueHeaderProps }