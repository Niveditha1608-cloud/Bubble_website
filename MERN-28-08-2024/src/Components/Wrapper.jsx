import React from 'react';

function Wrapper({children}) {
    return (
        <div>
            <h2>{children}</h2>
        </div>
    );
}

export default Wrapper;