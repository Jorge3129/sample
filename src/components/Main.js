import React from 'react';
import Section from "./Section";

const Main = ({setInput}) => {



    return (
        <main>
            <Section setInput={setInput}/>
            <section>
                <p>
                    Some text
                </p>
            </section>
            <section>
                <p>
                    More text
                </p>
            </section>
        </main>
    );
};

export default Main;
