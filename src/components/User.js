import React from 'react';

const User = ({user}) => {
    return (
        <li>
            <div><b>Name: </b>{user.name}</div>
            <div><b>Id: </b>{user.id}</div>
        </li>
    );
};

export default User;
