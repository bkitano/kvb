import { map } from 'lodash';
import React from 'react';

import { Item, ItemView } from '../../Item';

type ItemsPageProps = {
    items: Item[];
}

const ItemsPage = (props: ItemsPageProps) => {

    const { items } = props;

    return <div className='ItemsPage'>
        {map(items, (item: Item, key) => {
            return <ItemView {...item} key={key}/>
        })}
    </div>
}

export { ItemsPage, ItemsPageProps }