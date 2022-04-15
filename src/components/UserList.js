import React from 'react';
import User from "./User";

const UserList = ({users}) => {
    return (
        <ul>
            {users.map(user => <User user={user}/>)}
        </ul>
    );
};

export default UserList;
