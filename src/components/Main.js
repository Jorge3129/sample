import React from 'react';
import Section from "./Section";
import UserList from "./UserList";
import {Props} from "./Props";


const Main = ({input, setInput}) => {
    return (
        <main>
            <Props a={"a"}/>
            Input: {input}
            <Section setInput={setInput}/>
            <UserList/>
        </main>
    );
};

export default Main;
