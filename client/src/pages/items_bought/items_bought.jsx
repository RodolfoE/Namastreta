import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { boughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectItemsBought } from '../../redux/items_bought/items_bought.selectors';

const ItemsBought = ({ boughtItem, currentUser, itemsFetched }) => {
    useEffect(() => { 
        boughtItem(currentUser.id); 
    }, []);

    return (itemsFetched && itemsFetched.map(x => JSON.stringify(x))) || '';
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemsFetched: selectItemsBought
}); 

const mapDispatchToProps = dispatch => ({
    boughtItem: (userId) => dispatch(boughtItem(userId))
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(ItemsBought);
  