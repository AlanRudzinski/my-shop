import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections 
)

export const selectAllCollectionItems = createSelector(
    [selectCollections],
    collections => Object.values(collections).map(collection => collection.items).flat()
)

export const selectCollectionItemByID = (id) => createSelector(
    [selectAllCollectionItems],
    items => items.filter(item => item.id === id )[0]
)