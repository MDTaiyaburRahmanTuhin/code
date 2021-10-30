import React from 'react';
import MyOrder from './MyOrder';


const MyOrderS = ({ order, orders, setOrders }) => {

    //Delete an user
    const handleDeletUser = id => {
        console.log(id);
        const url = `http://localhost:5000/myorder/${id}`
        const proceed = window.confirm('Are you sure,you want to ddelete?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'tuhin')
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = orders.filter(order => order._id !== id)
                        setOrders(remainingUsers);
                    }
                })
        }
    }
    const { name, img, } = order
    return (
        <div>
            <h1>Name:{name}</h1>
            <img src={img} alt="" />
            <button onClick={() => handleDeletUser(order._id)}>Delet</button>
        </div>
    );
};

export default MyOrderS;