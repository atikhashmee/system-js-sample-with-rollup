System.register(['lodash', 'jquery'], (function () {
    'use strict';
    var startCase, $;
    return {
        setters: [function (module) {
            startCase = module.startCase;
        }, function (module) {
            $ = module["default"];
        }],
        execute: (function () {

            function runInit() {
                console.log('hello world');
                $("#map").text('hello world');
            }

            runInit();

            const el = document.createElement('h1');
            const words = "hello, world";
            const text = document.createTextNode(startCase(words));
            el.appendChild(text);

            document.body.appendChild(el);

        })
    };
}));
//# sourceMappingURL=hello.js.map
