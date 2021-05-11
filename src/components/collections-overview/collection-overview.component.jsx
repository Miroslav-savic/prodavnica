import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'; 


import CollectionPreview from '../collection-preview.component/collection-preview.component';
import  './collection-overview.styles.scss';

const CollectinOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    );
                })
            }
        </div>
    )
}

const mapStoreToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStoreToProps)(CollectinOverview);