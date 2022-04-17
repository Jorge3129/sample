import React from 'react';
import Section from "./Section";
import UserList from "./UserList";

const Main = ({setInput}) => {

    return (
        <main>
            <Section setInput={setInput}/>
            <UserList/>
        </main>
    );
};

export default Main;
