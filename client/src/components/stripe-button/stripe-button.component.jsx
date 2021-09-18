import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBoughtItem } from '../../redux/items_bought/items_bought.actions';
import { clearCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Button, Modal } from 'react-bootstrap';

const StripeCheckoutButton = ({ cartItems, price, user, addBoughtItem, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onToken = async token => {
    try{
      //await axios.post('/payment', { params: { amount: priceForStripe, token }});
      addBoughtItem(user.id, cartItems.map(x => x.id));
      clearCart();
      handleShow();

    } catch (error){
      console.log('Payment Error: ', error);
      alert('Houve um erro com seu pagamento. Por gentileza, verifique se o cartão de crédito está correto.');
    }      
  };

  const  msgTxt = `text=Olá, sou ${user && user.displayName}. Comprei alguns itens no seu site.`

  return (
    <div>
      {
        cartItems && cartItems.length > 0 &&
        <div>
          <Button type={'button'} onClick={onToken}>Finalizar Compra</Button>
         </div>
      }
       <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
              <Modal.Title>Aviso</Modal.Title>
          </Modal.Header>
          <Modal.Body> O Pedido foi enviado para o vendedor. Deseja entrar em contato pelo WhatApp?</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Não</Button>
              <Button variant="primary" onClick={() => window.open(`https://wa.me/31984976488?${msgTxt}`, '_blank').focus()}>Sim</Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addBoughtItem: (userId, cartItem) => dispatch(addBoughtItem(userId, cartItem)),
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
