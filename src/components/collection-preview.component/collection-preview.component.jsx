import React from 'react';

import CollectionItem from '../collection-item/collection-item.components';

import './collection-preview.styles.scss';

const ColellectionPreview = ({ title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'> 
            {
                items.filter((item, index) => index < 4).map(({ id, ...itemProps }) => {
                    return <CollectionItem key={id} {...itemProps}></CollectionItem>
                })
            }
            </div>
        </div>
    );
}
export default ColellectionPreview;