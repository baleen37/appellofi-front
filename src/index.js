import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    let el = document.createElement('div');
    let btn = document.createElement('button');

    el.innerHTML = _.join(['hello', 'webpack'], '');
    btn.innerHTML = 'Click';
    btn.onclick = printMe;

    el.appendChild(btn);
    return el;
}

document.body.appendChild(component());
