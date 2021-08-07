import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { boughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const ItemsBought = ({ boughtItem, currentUser }) => {

    useEffect(() => { boughtItem(currentUser.id); }, []);

    return 'we are the champions';
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
}); 

const mapDispatchToProps = dispatch => ({
    boughtItem: (userId) => dispatch(boughtItem(userId))
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(ItemsBought);
  