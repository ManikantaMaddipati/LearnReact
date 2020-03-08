import React from 'react';
import ReactDOM from 'react-dom';

//function components
//always one element
function myApp(){
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>)
}

//only one element
ReactDOM.render(<myApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
