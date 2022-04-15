import React from 'react';

const Section = ({setInput}) => {
    return (
        <div>
            NEW SECTION
            <input type="text" onChange={e => setInput(e.target.value)}/>
        </div>
    );
};

export default Section;
