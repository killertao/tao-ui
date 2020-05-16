import hljs from 'highlight.js/lib/core';
import MarkdownIt from "markdown-it";
class Md{
    parse(html){
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
       let mdStr=md.render(html);
       return mdStr;
    }
}
export default new Md();