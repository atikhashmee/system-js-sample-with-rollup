import { startCase } from 'lodash';
import { runInit } from './es/app'
import printArra from './es/index'
import jquery from 'jquery';
import toastr from 'toastr';

runInit();
printArra();
const el = document.createElement('h1');
const words = "hello, world";
const text = document.createTextNode(startCase(words));
el.appendChild(text);

document.body.appendChild(el);

jquery("#tostr").click(function() {
    toastr.success('Have fun storming the castle!', 'Miracle Max Says', {
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "progressBar": true,
        timeOut: 3000,
        preventDuplicates: true,
    });
});





