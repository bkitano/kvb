import { Container } from '@material-ui/core';
import React from 'react';
import { BoutiqueHeader } from '../../Modules/BoutiqueHeader';
import { mockItems } from '../../Modules/Item';
import { ItemsGrid } from '../../Modules/ItemsGrid/ItemsGrid';

/**
 * A feed is frankly the same thing as a boutique.
 */


const FeedPage = (props: any) => {
    const { items } = props;
    return (
        <Container>
            <ItemsGrid items={mockItems} />
        </Container>
    )
}

export { FeedPage }