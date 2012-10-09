/* *****************************************************************************
Copyright (c) niu tech. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0 
 
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

(function() {

    //Polyfill for older browsers
    if (!window.console) {
        window.console = {
            log: function() {}
        };
    }
    
    hashCode = function(s) {
        var hsh = 0, chr, i;
        if(s.length == 0) {
            return hsh;
        }
        for(i = 0; i < s.length; i++) {
            chr = s.charCodeAt(i);
            hsh = (hsh << 5) - hsh + chr;
            hsh = hsh & hsh; //Convert to 32bit integer
        }
        return hsh;
    }

    load = function(url) {
        var xhr;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } else {
            return false;
        }
        xhr.open('GET', url, false);
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain');
        }
        xhr.send(null);
        if(xhr.status == 200) {
            return xhr.responseText;
        }
        return false;
    }

    compile = function() {
        var outfile = {
            source: '',
            Write: function(s) {
                this.source += s;
            },
            WriteLine: function(s) {
                this.source += s + '\n';
            },
            Close: function() {}
        };
        var compiler = new TypeScript.TypeScriptCompiler(outfile);
        var script = document.getElementsByTagName('script');
        var body = document.getElementsByTagName('body')[0];
        var i, src = [], elem;
        for(i = 0; i < script.length; i++) {
            if(script[i].type == 'text/typescript') {
                if(script[i].src) {
                    src.push(load(script[i].src));
                } else {
                    src.push(script[i].innerHTML);
                }
            }
        }
        if(src.length == 0) {
            return;
        }
        try {
            if(window.sessionStorage && sessionStorage.getItem('typescript' + hashCode(src.join('')))) {
                outfile.source = sessionStorage.getItem('typescript' + hashCode(src.join('')));
            } else {
                compiler.parser.errorRecovery = true;
                compiler.setErrorCallback(function(start, len, message, block) {
                    console.log('Compilation error: ', message, '\n Code block: ', block, ' Start position: ', start, ' Length: ', len);
                });
                for(i = 0; i < src.length; i++) {
                    compiler.addUnit(src[i], '');
                }
                compiler.emit(false, function createFile(fileName) {
                    return outfile;
                });
                if(window.sessionStorage) {
                    sessionStorage.setItem('typescript' + hashCode(src.join('')), outfile.source);
                }
            }
            elem = document.createElement('script');
            elem.type = 'text/javascript';
            elem.innerHTML = '//Compiled TypeScript\n\n' + outfile.source;
            body.appendChild(elem);
        } catch(e) {
            console.log('Fatal error: ', e);
        }
    }
        
    compile();

})();