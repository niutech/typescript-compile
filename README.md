TypeScript Compile
==================

[TypeScript](http://www.typescriptlang.org) is a brand new language which compiles on JavaScript. However, this operation has to be performed manually, using the command-line compiler `tsc` or other tools. But now it has drastically improved, thanks to TypeScript Compile!

TypeScript Compile automatically transforms your TypeScript code into Javascript on the fly! Just write your TS code between:

    <script type="text/typescript">
        function greeter(person: string) {
            return "Hello, " + person;
        }
    </script>

or include your TS file:

    <script type="text/typescript" src="demo.ts"></script>

and add these two JS files at the end of the HTML body:

    <script type="text/javascript" src="typescript.min.js"></script>
    <script type="text/javascript" src="typescript.compile.min.js"></script>

That's it! TypeScript will be compiled to JavaScript and evaluated on DOMContentLoad.


Authors & License
----------------

TypeScript is developed by Microsoft Corp. under Apache 2.0 License.
TypeScript Compile is developed by Jerzy Głowacki under Apache 2.0 License.