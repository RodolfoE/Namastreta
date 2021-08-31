import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { boughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectItemsBought } from '../../redux/items_bought/items_bought.selectors';
import List from '../../components/list'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectHoleCollections, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const ItemsBought = ({ boughtItem, currentUser, itemsFetched, fetchCollectionsStart, collection, isLoading }) => {
    
    useEffect(() => { 
    
        boughtItem(currentUser.id); 
        fetchCollectionsStart();
        console.log(isLoading, itemsFetched, collection)
        if (!isLoading){
            itemsFetched.forEach(({cartItem}) => console.log(syncIdItemsWithObject(cartItem, collection)))
        }
    }, [isLoading]);

    const syncIdItemsWithObject = (idItems, collection) => {
        const objItemsBought = [];
        Object.keys(collection).map(x => collection[x]).forEach(({items}) => {
            items.forEach(item => {
                if (idItems.filter(idItem => (idItem == item.id)).length > 0)
                    objItemsBought.push(item);
            })
        })
        return objItemsBought;
    } 

    return <div>
        {
            itemsFetched && <List header={[{ text: 'Usuario' }]} dataSource={itemsFetched} toRender={[{attr: 'userId'}]}/>
        }
    </div> 
}

const mapDispatchToProps = dispatch => ({
    boughtItem: (userId) => dispatch(boughtItem(userId)),
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemsFetched: selectItemsBought,
    isLoading: state => !selectIsCollectionsLoaded(state),
    collection: selectHoleCollections
}); 

export default connect(
mapStateToProps,
mapDispatchToProps
)(ItemsBought);
  