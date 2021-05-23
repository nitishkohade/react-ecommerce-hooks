import {takeLatest, call, put} from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions'
import ShopActionsTypes from './shop.types'

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections')
        console.log(collectionRef)
        const snapshot = yield collectionRef.get()
        console.log(snapshot)
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        console.log(collectionsMap)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    // yield takeEvery(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
    yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
