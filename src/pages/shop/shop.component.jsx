import React, { useEffect } from 'react';
import CollectinOverviewContainer from '../../components/collections-overview/collection-overtview.container';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionStartAsync, match }) => {

    useEffect(() => {
        fetchCollectionStartAsync()
    }, [fetchCollectionStartAsync]);

    return(
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectinOverviewContainer} 
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);