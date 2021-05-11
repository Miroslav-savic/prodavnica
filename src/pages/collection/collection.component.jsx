import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.components';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
}

const mapStoreToProps = (state, ownProps) => { 
    
    return ({
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    })
}

export default connect(mapStoreToProps)(CollectionPage);