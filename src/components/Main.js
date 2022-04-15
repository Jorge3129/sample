import React from 'react';
import Section from "./Section";
import UserList from "./UserList";
import {users} from "../utils/user.utils";

const Main = ({setInput}) => {

    return (
        <main>
            <Section setInput={setInput}/>
            <UserList users={users}/>
        </main>
    );
};

export default Main;
