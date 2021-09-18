import React from 'react';

import {
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return {
        Produto: <ImageContainer><img src={imageUrl} alt='item' /></ImageContainer>,   
        Descricao: <TextContainer>{name}</TextContainer>,
        Qtd: <QuantityContainer>
          <div onClick={() => addItem(cartItem)}>&#5169;</div>
          <span>{quantity}</span>
          <div onClick={() => removeItem(cartItem)}>ᐯ</div>
        </QuantityContainer>,
        Preco: <TextContainer>{price}</TextContainer>,      
        Remover: <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
          &#10005;
        </RemoveButtonContainer> 
  }
};

export default CheckoutItem;