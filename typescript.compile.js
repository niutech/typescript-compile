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
    };

    compile = function() {
        var outfile = {
            source: "",
            Write: function(s) {
                this.source += s;
            },
            WriteLine: function(s) {
                this.source += s + "\n";
            },
            Close: function() {}
        };
        var compiler = new TypeScript.TypeScriptCompiler(outfile);
        var script = document.getElementsByTagName('script');
        var i, src;
        try {
            compiler.parser.errorRecovery = true;
            compiler.setErrorCallback(function(start, len, message, block) {
                console.log('Compiler error:', message, '\nCode block:', block, 'Start position:', start, 'Length:', len);
            });
            for(i = 0; i < script.length; i++) {
                if(script[i].type == 'text/typescript') {
                    if(script[i].src) {
                        src = load(script[i].src);
                    } else {
                        src = script[i].innerHTML;
                    }
                    compiler.addUnit(src, '');
                }
            }
            compiler.typeCheck();
            compiler.emit(false, function createFile(fileName) {
                return outfile;
            });
        } catch(e) {
            console.log('Error while compiling:', e);
        }
        eval(outfile.source);
    }
    
    if (!window.console) {
        window.console = {
            log: function() {}
        };
    }
    
    if(window.addEventListener) {
        addEventListener('DOMContentLoaded', compile, false);
    } else {
        attachEvent('onload', compile);
    }

})();