import { startCase } from 'lodash';
import { runInit } from './script/app'

runInit();

const el = document.createElement('h1');
const words = "hello, world";
const text = document.createTextNode(startCase(words));
el.appendChild(text);

document.body.appendChild(el);
