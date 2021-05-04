import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';


import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem, match, history, title }) => {
    const { name, price, imageUrl } = item;
    const urlToPush = match.path === '/shop' ? `${match.url}/${title.toLowerCase()}/${item.id}` : `${match.url}/${item.id}`
    
    const handleAddToCartClick = (item) => {
        addItem(item)
        swal({
            icon: "success",
            text: "You've successfully added item to cart"
        })
    }

    return (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{`${price}$`}</span>
        </div>
        <CustomButton onClick={() => history.push(urlToPush)} inverted> SEE DETAILS </CustomButton>
        <CustomButton onClick={() => handleAddToCartClick(item)} inverted> ADD TO CART </CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));