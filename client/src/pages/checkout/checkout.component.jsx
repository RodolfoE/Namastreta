import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import List from './../../components/list';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';


const CheckoutPage = ({ cartItems, total, clearItem, addItem, removeItem }) => (
  <List header={[
    {text: 'Produto'},
    {text: 'Descrição'},
    {text: 'Qtd'},
    {text: 'Preço'},
    {text: 'Remover'}
    ]} 
  
    dataSource={cartItems.map(cartItem => CheckoutItem({ cartItem, clearItem, addItem, removeItem }))}
  
    toRender={[
      {attr: 'Produto'},
      {attr: 'Descricao'},
      {attr: 'Qtd'},
      {attr: 'Preco'},
      {attr: 'Remover'}
    ]}>
  </List>
);



const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});


const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
