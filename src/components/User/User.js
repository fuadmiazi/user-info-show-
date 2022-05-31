import React, { useEffect, useState } from 'react';
import data from '../../data/users.json';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data);
        console.log(data);
    },[])

    return (
        <div>
            <h1>Name: </h1>
        </div>
    );
};

export default User;