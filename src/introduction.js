import React from 'react';

function Introduction(props){
    return(
        <div>
            <h1>I am {props.myName}</h1>
            <h1>I am student of batch 35 {props.Batch}</h1>
        </div>      
    );
}
export default Introduction;