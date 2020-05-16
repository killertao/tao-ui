const getOptions = require("loader-utils").getOptions;
var hljs = require('highlight.js');
var MarkdownIt = require('markdown-it');
module.exports = function (source) {
    let md = new MarkdownIt({
        typographer:true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                let hljsStr= hljs.highlight(lang, str, true).value
            
                return '<pre v-pre class="hljs"><code>' +hljsStr+
                  '</code></pre>'
              } catch (__) {}
            }
            var  escapeHtml=md.utils.escapeHtml(str);
            return '<pre v-pre class="hljs"><code>' + escapeHtml + '</code></pre>'
        }
    });
    const options = getOptions(this);
    mdHtml = md.render(source);
    var response = (
        `<template>\n` +
        `<section  v-pre class='${options.class}'>${mdHtml}</section>\n` +
        `</template>`
    );
    response = response.replace(/<a.+?href="(.+?)">(.+?)<\/a>/g,
        function ($0, $1, $2) { return `<a target="_blank" href="${$1}">${$2}</a>` })
    return response;
}