import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
//下面是hljs 按需加载
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);