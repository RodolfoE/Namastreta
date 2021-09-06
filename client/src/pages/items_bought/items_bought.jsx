import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { boughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectItemsBought } from '../../redux/items_bought/items_bought.selectors';
import List from '../../components/list'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectHoleCollections, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { userById } from '../../redux/user/user.actions'

const ItemsBought = ({ retrievedUsers, boughtItem, currentUser, itemsFetched, fetchCollectionsStart, collection, isLoading, getUserById }) => {
    const [list, setList] = useState([]);
    
    useEffect(() => { 
        boughtItem(currentUser.id); 
        fetchCollectionsStart();
        getUserById(['hqMsIjekD2OichL9YidY8AAXdn73']);
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading && retrievedUsers.length)
            setList(itemsFetched.map((cartItem) => console.log(normalizeToList(syncItemsWithUsers(retrievedUsers, syncIdItemsWithObject(cartItem, collection))))));            
    }, [retrievedUsers, isLoading]);

    const normalizeToList = (items) => {
        return items.map(({ user, name, price}) => ({
            'Nome': user.name,
            'Email': user.email,
            'Produto': name,
            'Preço': price
        }));
    }

    const syncItemsWithUsers = (users, items) => {
        console.log(users, items);
        return items.map(item => ({ ...item, user: users.find(us => us.id == item.userId)}))
    }

    const syncIdItemsWithObject = (ItemsBought, collection) => {
        const objItemsBought = [];
        Object.keys(collection).map(x => collection[x]).forEach(({items}) => {
            items.forEach(item => {
                if (ItemsBought.cartItem.filter(idItem => (idItem == item.id)).length > 0)
                    objItemsBought.push({ ...item, userId: ItemsBought.userId });
            })
        })
        return objItemsBought;
    }

    const getColumnsUsed = () => ([
        {attr: 'Nome'},
        {attr: 'Email'},
        {attr: 'Produto'},
        {attr: 'Preço'},
    ])

    const getHeader = () => ([
        { text: 'Nome' },
        { text: 'Email' },
        { text: 'Produto' },
        { text: 'Preço' }
    ])

    return <div>
        {
            list.length && <List header={getHeader()} dataSource={itemsFetched} toRender={getColumnsUsed()}/>
        }
    </div> 
}

const mapDispatchToProps = dispatch => ({
    boughtItem: (userId) => dispatch(boughtItem(userId)),
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
    getUserById: (user) => dispatch(userById(user))
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemsFetched: selectItemsBought,
    isLoading: state => !selectIsCollectionsLoaded(state),
    collection: selectHoleCollections,
    retrievedUsers: (state) => state && state.user && state.user.retrievedUsers
}); 

export default connect(
mapStateToProps,
mapDispatchToProps
)(ItemsBought);
  