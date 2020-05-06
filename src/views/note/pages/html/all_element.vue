
<template>
  <div>
    <div>
      <h2>html 元素特性</h2>
      <section>
        <p>开始标签</p>
        <p>结束标签</p>
        <p>内容</p>
        <p>属性</p>
      </section>
      <p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element" target="_blank">元素参考</a>
      </p>
    </div>
    <div>
      <h2>全局属性</h2>
      <section>
        <p>
          <a
            href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes"
          >参考链接：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes</a>
        </p>
        <p>id,class,style,tabindex,lange,title, contenteditable,data-*,draggable等...</p>
      </section>
    </div>
    <div>
      <h2>html:页面根元素</h2>
      <section>
        <h3>属性</h3>
        <article>
          <p>lange:en|zh =>可以指定整个文档的语言类型</p>
        </article>
      </section>
    </div>
    <div>
      <h2>title</h2>
      <section>声明页面标题</section>
    </div>
    <div>
      <h2>meta</h2>
      <section>
        <h3>属性</h3>
        <p>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta">参考链接</a>
        </p>
        <article>
          <p>charset:utf-8 =>声明文档使用的字符集类型</p>
          <p>name ：具有特殊含义</p>
          <p>http-equiv ：里面的内容是</p>
          <p>content: name,http-equiv 的内容值</p>
        </article>
        <section>
          <p>1.charset,name,http-equiv 只能存在一个</p>
          <p>2.name的值有：author,description,viewport ...</p>
          <p>3.http-equiv的值有 refresh,content-security-policy...</p>
        </section>
      </section>
    </div>
    <div>
      <h2>blockquote</h2>
      <p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta">参考链接</a>
      </p>
      <section>
        <p>1.自定缩进，可以通过margin 来改变</p>
      </section>
      <section>
        eg:
        <br />
        <blockquote>
          <p>1111111</p>
          <p>22222222222222</p>
        </blockquote>
      </section>
    </div>
    <div>
      <h2>figure,figurecaption</h2>
      <p>
        <a
          target="_blank"
          href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure"
        >参考链接</a>
      </p>
    </div>
    <div>
      <h2>a</h2>
      <p>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a">参考链接</a>
      </p>
      <section>
        <h3>属性</h3>
        <p>1.download 此属性指示浏览器下载 URL 而不是导航到它 因此将提示用户将其保存为本地文件</p>
        <p>
          2.href https:外链 ,tel:电话 mailto:游戏地址 #本页面id
          <br />#top 可以直接回到页面顶部
        </p>
        <p>target：_self 默认，当前页面打开,_blank 新的窗口打开</p>
      </section>
      <section>
        <p>a 里面可以嵌套图片什么的,href 可以是 base64 的数据类型 或者是blob:url data:url</p>
      </section>
      <section>
        eg:
        <br />
        <a href="#">回到页面顶部 因为是在vue 的hash 模式下无效</a>
      </section>
    </div>
    <div>
      <h2>table</h2>
      <p>
        <a
          target="_blank"
          href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#表格内容"
        >参考链接</a>
      </p>
      <h3>相关标签</h3>
      <section>
        <p>
          1.colgroup,col 可以定义一列的行为
          span：该属性值为一个正整数，表示该 col 元素横跨的列数。默认值为1
          <br />其他的html5 已经废弃，最好不要使用
        </p>
        <p>
          tbody,th,td,tr,tfood
          <br />td 属性 colspan,rowspan, 定义合并的列数、行数
        </p>
      </section>
      <section>
        eg：
        <br />
        <table>
          <caption>Council budget (in £) 2018</caption>
          <thead>
            <tr>
              <th>Items</th>
              <th scope="col">Expenditure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Donuts</th>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">Stationery</th>
              <td>18,000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div>
      <h2>表单</h2>
      <p>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#表单">参考链接</a>
      </p>
      <section>
        <p>input :虚拟键盘的配置类型</p>
      </section>
      <form action>
        <p>
          <label for>姓名</label>
          <input placeholder="请输入姓名" autofocus maxlength="5" type="text" />
        </p>
        <p>
          <label for>年龄</label>
          <input type="number" />
        </p>
        <p>
          <label for>头像</label>
          <input type="file" accept="image/*" />
        </p>
        <p>
          <label for>登陆密码</label>
          <input type="password" value="11111" />
        </p>
        <p>
          <label for>备注</label>
          <textarea>备注</textarea>
        </p>
        <p>
          <label for>性别</label>
          男
          <input type="radio" name="sex" checked /> 女
          <input type="radio" name="sex" />
        </p>
        <p>
          <label for>爱好</label>
          篮球
          <input type="checkbox" name="aihao" checked /> 足球
          <input type="checkbox" name="aihao" />
          台球
          <input type="checkbox" name="aihao" disabled />
        </p>
        <p>
          <label for>下拉框</label>
          <select>
            <optgroup label="Group 1">
              <option>Option 1.1</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Option 2.1</option>
              <option>Option 2.2</option>
            </optgroup>
            <optgroup label="Group 3" disabled>
              <option>Option 3.1</option>
              <option>Option 3.2</option>
              <option>Option 3.3</option>
            </optgroup>
          </select>
        </p>
        <p>
          <button type="submit">type：submit,reset</button>
        </p>
      </form>
    </div>
    <div>
      <h2>视频音频</h2>
      <p>
          <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding
          /Video_and_audio_content">参考链接1</a>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video">参考链接2</a>
      </p>
      <section>
        <h3>video</h3>
        <div>
          eg:
          <br />
          <p>单一资源</p>
          <video src="/video/1.mp4" controls>
            <p>
              你的浏览器不支持 HTML5 视频。可点击
              <a href="/video/1.mp4">此链接</a>观看
            </p>
          </video>
          <p>多资源，兼容浏览器 的下载类型</p>
          <video controls muted poster="/video/1.jpg">
            <source src="/video/1.mp4" type="video/mp4" />
            <source src="/video/1.avi" type="video/avi" />
            <p>
              你的浏览器不支持 HTML5 视频。可点击
              <a href="rabbit320.mp4">此链接</a>观看
            </p>
          </video>
          <p>下面是音乐</p>
          <audio controls src="/1.mp3"></audio>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
table,
td,
th {
  border: solid 1px;
}
</style>

