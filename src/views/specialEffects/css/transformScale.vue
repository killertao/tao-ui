<template>
    <div class="ml10 bg-fff"> 
        <div class="markdown-body">
    <blockquote>
        transform:是css 心中的一个css 属性 表示的2D 变换<br>
        scale(x,y) 是他的一种值类型 表示某个元素放大多少倍(小数的话就带表缩小)<br>
        x:水平放大，y:垂直放大
    </blockquote>
    </div>
    <p>例子1,轮播突出</p>
    <div class="container scalarExample1">
        <section><img src="/tx/susu1.jpg" ></section>
        <section><img src="/tx/susu2.jpg" ></section>
        <section><img src="/tx/susu3.jpg" ></section>
        <section><img src="/tx/susu4.jpg" ></section>
    </div>
    <div>此例主要运用了transform 的scale </div>

    <p>例子2,指向突出,拉进的感觉</p>
    <div class="container scalarExample2">
        <section><img src="/tx/susu1.jpg" ></section>
        <section><img src="/tx/susu2.jpg" ></section>
        <section><img src="/tx/susu3.jpg" ></section>
        <section><img src="/tx/susu4.jpg" ></section>
    </div>
    <div>此例主要运用了transform 的scale,作用在图片上,父类超出隐藏，就有了这个效果 </div>
    </div>    
</template>
    <style scoped>
        .container{
            display: flex;
            width: 600px;
            height: 150px;
        }
        .container>section{
            border: solid 1px;
            flex-grow: 1;
        }
        .container>section>img{
          width: 100%;
          height: 100%;
        }
        .container.scalarExample1>section:hover{
            transform: scale(1.2,1.2);
        }
        .container.scalarExample2>section>img{
            opacity:0.3;
        }
        .container.scalarExample2>section{
            overflow: hidden;
        }
        .container.scalarExample2>section>img:hover{
            opacity:1;
            transform: scale(1.8,1.8);
        }
    </style>
