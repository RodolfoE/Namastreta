import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBoughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const StripeCheckoutButton = ({ cartItems, price, user, addBoughtItem }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';
  console.log(cartItems)

  const onToken = async token => {
    try{
      //await axios.post('/payment', { params: { amount: priceForStripe, token }});
      addBoughtItem(user.id, cartItems.map(x => x.id));
    } catch (error){
      console.log('Payment Error: ', error);
      alert('Houve um erro com seu pagamento. Por gentileza, verifique se o cartão de crédito está correto.');
    }      
  };

  return (
    <div>
      <StripeCheckout
            label='Pagamento'
            name='Namastreta Clothing Ltd.'
            billingAddress={false}
            shippingAddress={false}
            image='https://svgshare.com/i/CUz.svg'
            description={`O total da compra foi R$${price}`}
            amount={priceForStripe}
            panelLabel='Pagamento'
            token={onToken}
            stripeKey={publishableKey}
          />

          <button type={'button'} onClick={onToken}>Teste</button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  addBoughtItem: (userId, cartItem) => dispatch(addBoughtItem(userId, cartItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
