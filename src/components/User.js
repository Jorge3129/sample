import React from 'react';

const User = ({user}) => {
    return (
        <li key={user.id}>
            <h3>User</h3>
            <b>Name: </b>{user.name}
        </li>
    );
};

export default User;
