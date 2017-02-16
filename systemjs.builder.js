var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('/', 'systemjs.config.js');

builder.buildStatic('source/main.js','dist/bundle.js').then(function(){
    console.log('bundling complete');
},function(error){
    console.log('error');
    console.log(error);
});