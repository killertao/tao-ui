# html 元素
>html是超文本标记语言
>1. 按元素的内联分为:块元素和行内元素
>2. 按照用途大致分为：布局元素,展示元素（非表单元素，表单元素，行为样式元素（可以使用元素和css实现））
>3. [元素具体参考:MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 块元素和行内元素
> 块元素的宽度是100% ,默认占用一行，而行内元素不占一行。<br/>
 在有些布局的情况下 比如flex 弹性布局 快元素的默认特性会被覆盖

## html的元素

- html 必须的根元素，有着lang 属性可以指定在页面的默认语言类型，如果是en 谷歌浏览器就会提示叫你翻译
- body html 内容块元素
- head html 的头部标志 可以在这里指定
 ```html
  1. <title>My test page</title>指定页面标题
  2. <meta charset="utf-8">指定页面字符集 
  3. <meta name="author" content="Chris Mills"> 可做页面seo
  4. <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">定制 页面logo
 ```
- div 块元素，一般布局元素
- p 块元素，浏览器都有默认的上下边距
- h1-h6 块元素，标题元素，有浏览器默认的字体大小
- ul,ol,li dl dt 块元素，用来展示列表的 
- table 块元素，用来展示表格的
- span 行内元素，和div差不多无语义
- a 行内元素,用来展示链接的
- img 行内元素，用来展示图片的
- br 用来换行
- $nbsp 用来表示1个空格，因为html 的渲染，连续1一个以上的空格只会渲染1个 最好是使用css padding 1em , 来实现 这种效果
- [其他元素具体参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

### html5 布局语义标签
  ```html
     <header>页眉
     <main> 主要内容区域，只能有一个
     <nav> 导航
     <section> 内容区域段
     <article>内容区域段
     <aside> 侧边栏
     <footer> 页脚
  ```
### 可用css 代替的或者在浏览器有特殊显示元素
  ```html
  <b>粗体</b>
  <i>斜体</i>
  <u>下划线</u>
  <address>地址</address>
  <blockquote>块引用，会有两个em的缩进</blockquote>
  <q>行内引用 会加个引号<q>
  <hr> 下划线
  <abbr title="超文本标记语言（Hypertext Markup Language）">缩略语</abbr>
  <sub>下标</sub>
  <sup>上标</sup>
  <code>: 用于标记计算机通用代码。
  <pre>: 用于保留空白字符（通常用于代码块）——如果您在文本中使用缩进或多余的空白，
    浏览器将忽略它，
    您将不会在呈现的页面上看到它。但是，如果您将文本包含在<pre>标签中，
    那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
  <var>: 用于标记具体变量名。
  <kbd>: 用于标记输入电脑的键盘（或其他类型）输入。
  <samp>: 用于标记计算机程序的输出。
  ```
### 特殊字符
   ```text
   &nbsp; &gt; &lt;   
   ```
### 表单元素
- input 
- select
- option 
- optgroup
- form 
- textarea
- label
- button 






 

