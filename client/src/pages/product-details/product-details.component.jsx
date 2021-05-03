import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectAllCollectionItems, selectCollectionItemByID } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions'


import './product-details.styles.scss'

const ProductDetailsPage = ({item, dispatch}) => {
    const { imageUrl, name } = item;
    return (
    <div className="page-wrapper">
        <div className="image-container">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
        </div>
        <div className="content-container">
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti placeat voluptates eius voluptatibus. Dolor ipsum assumenda quia enim nesciunt veniam natus quisquam deleniti animi similique consequatur dolore possimus, minima explicabo asperiores ducimus ea quibusdam id at sunt corporis fuga laudantium molestias? In aut quia excepturi asperiores consequatur obcaecati minima!</p>
            <CustomButton onClick={() => dispatch(addItem(item))}>ADD ITEM TO CART</CustomButton>
        </div>

    </div>

)}

const mapStateToProps = (state, ownProps) => ({
    collections: selectAllCollectionItems(state),
    item: selectCollectionItemByID(parseInt(ownProps.match.params.productId))(state)
})



export default connect(mapStateToProps)(ProductDetailsPage);