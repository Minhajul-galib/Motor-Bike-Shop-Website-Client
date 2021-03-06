import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMyOrders = ()=>{
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`https://floating-anchorage-50833.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));

    }, [user.email]);
    return [myOrders, setMyOrders];
}

export default useMyOrders;