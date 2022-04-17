import React, {useState} from 'react';
import User from "./User";
import {initUsers} from "../utils/user.utils";

const UserList = () => {

    const [users, setUsers] = useState(initUsers);
    const [name, setName] = useState("");

    const getId = () => users.reduce((id, user) => user.id > id ? user.id : id, 0) + 1

    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, {name, id: getId()}])
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form>
            <ul>
                {users.map(user => <User key={user.id + ""} user={user}/>)}
            </ul>
            <input type="text" value={name} onChange={onChange}/>
            <button onClick={addUser}>Add User</button>
        </form>
    );
};

export default UserList;
