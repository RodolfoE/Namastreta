import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBoughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const StripeCheckoutButton = ({ cartItems, price, user }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

  const onToken = async token => {
    try{
      //await axios.post('/payment', { params: { amount: priceForStripe, token }});
      addBoughtItem(user.id, cartItems);
      alert('succesful payment');
    } catch (error){
      console.log('Payment Error: ', error);
      alert('Houve um erro com seu pagamento. Por gentileza, verifique se o cartão de crédito está correto.');
    }      
  };

  return (
    <StripeCheckout
      label='Pagamento'
      name='Namastreta Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`O total da compra foi R$${price}`}
      amount={priceForStripe}
      panelLabel='Pagamento'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addBoughtItem: item => dispatch(addBoughtItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
