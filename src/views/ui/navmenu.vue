<template>
    <div class="nav-menu-box">
            <header class="nav-box">
                head
            </header>
            <div class="content-box" >
                <div class="menu-box">
                    <div class="menu-item selected" style="border:none">JS</div>
                    <div class="menu-item">Css1</div>
                    <div class="menu-item">C#学习</div>
                    <div class="menu-item">java学习</div>
                    <div class="menu-item">其他</div>
                </div>
            </div>
    </div>
    
</template>
<script>
    export default {
        data:function(){
            return {};
        }
    }
</script>
<style lang="less" scoped>
    /*
    from ui-navmenu
    */
    .aa{
        font-size: 22px;
    }
    @navH:60px;
    .nav-box{
         box-sizing: border-box;
         height:@navH;
        //  background-color: red;
         border: solid 1px;
    }
    .content-box{
        box-sizing: border-box;
        // margin-top:@navH;
        height:calc(100% - @navH) ;
        // background: orange;
    }
    .menu-box{
        background-color:goldenrod;
        height: 100%;
        min-width:8em ;
        padding-top: 10px;
        display: inline-flex;
        flex-direction: column;
        >.menu-item:not(:last-child){
            border-bottom: solid #dddddd;
        }
    }
    .menu-item{
        padding-left: 1rem;
        min-height: 40px;
        display:flex;
        align-items: center;
        &.selected{
           box-shadow: 
            inset 0 0 0 1px hsla(0,0%,0%,.2), 
            inset 0 2px 0 hsla(0,0%,100%,.1),
            inset 0 1.2em 0 hsla(0,0%,100%,0.1),
            inset 0 -0.2em 0 hsla(0,0%,100%,.1), 
            inset 0 -0.25em 0 hsla(0,0%,0%,.25), 0 0.25em 0.25em hsla(0,0%,0%,.05) 
        }    
    }
    
    
</style>