import { Container } from '@material-ui/core';
import React from 'react';
import { mockItems } from '../../Modules/SquareItem';
import { ItemsFeed } from '../../Modules/ItemsFeed/ItemsFeed';

/**
 * A feed is frankly the same thing as a boutique.
 */


const FeedPage = (props: any) => {
    const { items } = props;
    return (
        <Container>
            <ItemsFeed items={items} variant='feed' />
        </Container>
    )
}

export { FeedPage }