TypeScript Compile
==================

[TypeScript](http://www.typescriptlang.org) TypeScript is a free and open source programming 
language developed and maintained by Microsoft. It is a strict superset of JavaScript, and 
adds optional static typing and class-based object-oriented programming to the language.

TypeScript needs to be compiled as currently browsers do not support the full set of features
supported by TypeScript. With TypeScript Compile you can include TypeScript files in the browser
and have them compile at runtime.

TypeScript Compile automatically transforms your TypeScript code into JavaScript on the fly! Just write your TS code between:

```html
<script type="text/typescript">
    ...
</script>
```

or include your TS file:

```html
<script type="text/typescript" src="demo.ts"></script>
```

and add these two JS files **at the end of the HTML body**:

```html
<script type="text/javascript" src="typescript.min.js"></script>
<script type="text/javascript" src="typescript.compile.min.js"></script>
```

That's it! TypeScript will be compiled to JavaScript and immediately run, by appending the compiled script to the HTML body. 

> Note: You probably don't want to do this on a production website/application but running the TypeScript directly in your browser can help while you are developing.

Demo
----

[Here is a live demo](http://www.markwylde.co.uk/typescript-compile/demo/demo.html)


Download
--------

[TypeScript 1.5-alpha](https://github.com/markwylde/typescript-compile/blob/master/js/typescript.js) (minified JS)

[TypeScript Compile 0.4](https://github.com/markwylde/typescript-compile/blob/master/js/typescript.compile.min.js) (minified JS)

[TypeScript Compile 0.4](https://github.com/markwylde/typescript-compile/blob/master/js/typescript.compile.js) (development JS)


Authors & License
----------------

TypeScript is developed by Microsoft Corp. under Apache 2.0 License.

TypeScript Compile is developed by Jerzy Głowacki under Apache 2.0 License.

TypeScript Compile has been updated for TypeScript 1.5-alpha by Mark Wylde under Apache 2.0 License.