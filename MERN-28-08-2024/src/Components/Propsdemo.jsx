import React from 'react';
import PropTypes from 'prop-types'

function Propsdemo(props) {
    return (
        <div>
            <p>Props demo</p>
            <p>{props.name}</p>
        </div>
    );
}

Propsdemo.defaultProps = {
    name: "Guest",
  };
  
  

export default Propsdemo;