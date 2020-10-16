import React from 'react';
import ReactDOM from 'react-dom';

const {document} = window;

function render() {
    ReactDOM.render('<Application/>', window.document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render);
