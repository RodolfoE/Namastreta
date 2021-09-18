import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { boughtItem } from '../../redux/items_bought/items_bought.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectItemsBought } from '../../redux/items_bought/items_bought.selectors';
import List from '../../components/list'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectHoleCollections, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { userById } from '../../redux/user/user.actions';
import { Modal, Button } from 'react-bootstrap';

const ItemsBought = ({ retrievedUsers, boughtItem, currentUser, itemsFetched, fetchCollectionsStart, collection, isLoading, getUserById }) => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => { 
        boughtItem(currentUser.id); 
        fetchCollectionsStart();
        getUserById(['hqMsIjekD2OichL9YidY8AAXdn73']);
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading && retrievedUsers.length)
            setList(normalizeToList(itemsFetched.map((cartItem) => syncItemsWithUsers(retrievedUsers, syncIdItemsWithObject(cartItem, collection)))));            
    }, [retrievedUsers, isLoading]);


    const handleEmail = (email) => {
        return <span style={{cursor: 'pointer'}} onClick={handleShow}>{email}</span>
    }

    const normalizeToList = (items) => {
        console.log(items, '33')
        const listItems = [];  
        items.map(item =>
            item.map(({ user, name, price}) => listItems.push({
                'Nome': handleEmail(user.displayName),
                'Email': handleEmail(user.email),
                'Produto': name,
                'Preço': 'R$' + price
            }))
        )
        return listItems;
    }

    const syncItemsWithUsers = (users, items) =>{
        const itemsWithUsers = items.map(item => ({ ...item, user: users.find(us => us.id == item.userId)}))
        console.log(itemsWithUsers, '37')
        return itemsWithUsers;
    } 

    const syncIdItemsWithObject = (ItemsBought, collection) => {
        const objItemsBought = [];
        Object.keys(collection).map(x => collection[x]).forEach(({items}) => {
            items.forEach(item => {
                if (ItemsBought.cartItem.filter(idItem => (idItem == item.id)).length > 0)
                    objItemsBought.push({ ...item, userId: ItemsBought.userId });
            })
        })
        console.log(objItemsBought, '45')
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
            list.length && <List header={getHeader()} dataSource={list} toRender={getColumnsUsed()}/>
        }
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body> I will not close if you click outside me. Don't even try to press escape key.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
         </Modal>
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
  