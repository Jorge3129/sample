import React from 'react';
import Section from "./Section";
import UserList from "./UserList";

const Main = ({input, setInput}) => {


    return (
        <main>
            Input: {input}
            <Section setInput={setInput}/>
            <UserList/>
        </main>
    );
};

export default Main;
