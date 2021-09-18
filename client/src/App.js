import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ItensBought from './pages/items_bought/items_bought';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import SHOP_DATA  from './redux/shop/shop.data';

import { addCollectionAndDocuments }  from './firebase/firebase.utils';

import Contact from './pages/Contact/contact'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    (() => {
      //addCollectionAndDocuments('collections', Object.keys(SHOP_DATA).map(x => SHOP_DATA[x]).map(({title, items}) => ({title, items})))
    } 
    )();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}/>
        <Route exact path='/contact' component={Contact}/>
        {
          currentUser &&
          <Route exact path={['/itens_bought', '/items_bought']} render={() => currentUser && currentUser.isAdm ? <ItensBought /> : <Redirect to='/' />}/> 
        } 
      </Switch>

    <span>Criado com &#9829; por <a style={{cursor: 'pointer'}} href='https://github.com/RodolfoE' target="_blank">Rodolfo Eliezer</a></span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
