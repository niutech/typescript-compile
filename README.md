TypeScript Compile
==================
**Current Version:** [TypeScript 1.8.10](https://github.com/Microsoft/TypeScript/tree/v1.8.10)

---

[TypeScript](http://www.typescriptlang.org) is a free and open source programming 
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

[TypeScript 1.8.10](https://github.com/s7726/typescript-compile/blob/master/js/typescript.js) (minified JS)

[TypeScript Compile 0.5](https://github.com/s7726/typescript-compile/blob/master/js/typescript.compile.min.js) (minified JS)

[TypeScript Compile 0.5](https://github.com/s7726/typescript-compile/blob/master/js/typescript.compile.js) (development JS)


Developing and Updating
-----------------------

If you would like to upgrade typescript-compile to the latest version of TypeScript please have
a look at the wiki entry:
https://github.com/markwylde/typescript-compile/wiki/Updating-TypeScript

@markwylde did a great job on the wiki entry, but it there were a few sticking points I ran into:

- The typescript files needed are in different folders now
	- They are both in the `./lib` folder rather than the `./bin` folder
- The minifyer he suggests did not strip the comments correctly
	- I used [http://www.danstools.com/javascript-minify/](http://www.danstools.com/javascript-minify/)
	- This one doesn't strip all the new lines so I still had to combine all the lines (Sublime Text to the rescue)
- the demo should be hosted to prevent modern browsers from preventing loading of some of the files
	- `npm install http-server` or something similar is your friend
	- run `http-server` in the base directory of the checkout and visit `http://127.0.0.1/demo/demo.html` that way the
      path to the js files will resolve correctly (CORS issues)


Authors & License
----------------

TypeScript is developed by Microsoft Corp. under Apache 2.0 License.

TypeScript Compile is developed by Jerzy Głowacki under Apache 2.0 License.

TypeScript Compile has been updated for TypeScript 1.5-alpha by Mark Wylde under Apache 2.0 License.