const getOptions = require("loader-utils").getOptions;
var hljs = require('highlight.js');
var MarkdownIt = require('markdown-it');


module.exports = function (source) {
    let md = new MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>'
              } catch (__) {}
            }
            return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        }
    });
    const options = getOptions(this);
    mdHtml = md.render(source);
    var response = (
        `<template>\n` +
        `<section class='${options.class}'>${mdHtml}</section>\n` +
        `</template>`
    );
    response = response.replace(/<a.+?href="(.+?)">(.+?)<\/a>/g,
        function ($0, $1, $2) { return `<a target="_blank" href="${$1}">${$2}</a>` })
    return response;
}