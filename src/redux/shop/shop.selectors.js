import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionId) => {
    return (
        createSelector(
            [selectShopItems],
            collections => collections[collectionId]
        )
    )
} 