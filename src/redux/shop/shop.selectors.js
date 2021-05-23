import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
  );

export const getShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections ? Object.values(shop.collections) : []
)

export const getCollectionById = collectionId => createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionId] : null
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)