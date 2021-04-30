import React from 'react';
import { connect } from 'react-redux'

import { selectAllCollectionItems, selectCollectionItemByID } from '../../redux/shop/shop.selectors';


const ProductDetailsPage = ({item, match}) => (
    <div className="">
        {console.log(item)}
        {item.name}

    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collections: selectAllCollectionItems(state),
    item: selectCollectionItemByID(parseInt(ownProps.match.params.productId))(state)
})

export default connect(mapStateToProps)(ProductDetailsPage);