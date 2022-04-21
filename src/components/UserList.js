import React, {useState} from 'react';
import User from "./User";
import {getId, initUsers} from "../utils/user.utils";

const UserList = () => {

    const [users, setUsers] = useState(initUsers);
    const [name, setName] = useState("");
    const [deleteId, setDeleteId] = useState("");

    const addUser = (e) => {
        e.preventDefault();
        if (!name) return alert("Please enter a name!")
        setUsers([...users, {name, id: getId(users)}])
        setName("")
    }

    const deleteUser = (e) => {
        e.preventDefault();
        if (!deleteId) return alert("Please select a user to delete!")
        setUsers(users.filter(user => user.id !== parseInt(deleteId)))
        setDeleteId("")
    }

    return (
        <form>
            <ul>
                <li><h3>User count: {users.length}</h3></li>
                {users.map(user => <User key={user.id + ""} user={user}/>)}
            </ul>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={addUser}>Add User</button>
            <select onChange={e => setDeleteId(e.target.value)}>
                <option value={""}>--</option>
                {users.map(({id, name}) =>
                    <option key={id} value={id}>
                        {`#${id} ${name}`}
                    </option>)}
            </select>
            <button onClick={deleteUser}>Delete user</button>
        </form>
    );
};

export default UserList;
