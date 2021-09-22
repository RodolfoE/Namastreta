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
import SmallFormInput from './../../components/form-input/small-input.component'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { ImageContainer, Descricao, AbsolutoX, QuantityContainer, Greater, Less } from './checkout.styles'


const CheckoutPage2 = ({ cartItems, total, clearItem, addItem, removeItem }) => (
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


const CheckoutPage = ({ cartItems, total, clearItem, addItem, removeItem }) => {
  const renderContent = (cartItem) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return <div className={'card mt-3'}>
      <div style={{position: 'relative'}}>
        {/* Delete Div */}
        <AbsolutoX onClick={() => clearItem(cartItem)}>&#10005;</AbsolutoX>

        {/** Descrition */}
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>

        {/** Foto */}
        <ImageContainer><img src={imageUrl} alt='item'/></ImageContainer>

        {/** func raise and diminish, qtd, price */}
        <div className='d-flex'>
          <div style={{flexGrow: 1}}>asdfasdf</div>
          <div style={{flexGrow: 1}}>
          <QuantityContainer>
            <Greater onClick={() => addItem(cartItem)}>&#10133;</Greater>
              <spam style={{fontSize: 20, margin: '0px 20px 0px 20px'}}>{quantity}</spam>
            <Less onClick={() => removeItem(cartItem)}>&#10134;</Less>
          </QuantityContainer>  
          </div>
        </div>
      </div>
    </div>
  }
  
  return <div className='mt-5'>
    { cartItems.map(x => renderContent(x)) }
  </div>
}

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
