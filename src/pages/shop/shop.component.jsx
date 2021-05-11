import React from 'react';
import CollectinOverview from '../../components/collections-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'; 
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectinOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubsrcibeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
           const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionMap);
           this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);