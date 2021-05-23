import React from 'react'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from 'reselect';
import { getShopCollections } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            Object.values(collections).map(
                ({id, ...otherProps}) => (
                    <CollectionPreview
                        key={id}
                        {...otherProps}
                    />
                )
            )
        }
    </div> 
)

const mapStateToProps = createStructuredSelector({
    collections: getShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)