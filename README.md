TypeScript Compile
==================

[TypeScript](http://www.typescriptlang.org) is a brand new language which compiles on JavaScript. However, this operation has to be performed manually, using the command-line compiler `tsc` or other tools. But now it has drastically improved, thanks to TypeScript Compile!

TypeScript Compile automatically transforms your TypeScript code into JavaScript on the fly! Just write your TS code between:

    <script type="text/typescript">
        ...
    </script>

or include your TS file:

    <script type="text/typescript" src="demo.ts"></script>

and add these two JS files at the end of the HTML body:

    <script type="text/javascript" src="typescript.min.js"></script>
    <script type="text/javascript" src="typescript.compile.min.js"></script>

That's it! TypeScript will be compiled to JavaScript and evaluated on DOMContentLoad.


Demo
----

[Here is a live demo](https://niutech.github.com/typescript-compile/demo/demo.html)


Download
--------

[TypeScript 0.8](https://raw.github.com/niutech/typescript-compile/master/js/typescript.min.js) (minified JS)
[TypeScript Compile 0.1](https://raw.github.com/niutech/typescript-compile/master/js/typescript.compile.min.js) (minified JS)


Authors & License
----------------

TypeScript is developed by Microsoft Corp. under Apache 2.0 License.
TypeScript Compile is developed by Jerzy Głowacki under Apache 2.0 License.