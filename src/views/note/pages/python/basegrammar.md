# python基础
## 代码块
>缩进代表代码块 同1个代码块必须用相同的缩进
## 代码的注释
> 单行#  多行'''注释内容'''
## 变量
> 变量只能在赋值的时候声明      
  变量区大小写  
  变量只能包含字母数字下划线    
  变量不能以数字开头    
  变量不能用内部关键字(str,False,True等)    
### 声明
~~~js
x=1
~~~
### 多个变量同时声明
~~~js
x,y,z=1,"yyy",False
~~~
## 变量作用域
>全局变量，和局部变量（一般在函数内部）
 ### global 的作用
 - 把局部变量变成全局变量
 - 使用了global 在内部改成变量，会作用到全局变量上（其实也就是这个x变量变成的真正的全局变量）

## 条件，循环，pass,语句
~~~js
 #条件
 if x>60:
     print("老年人")
 elif x>30:
     print("中年人") 
 elif x>20:
     print("成年人") 
 else:
     print("青年人")  
 #for in 遍历=======================   
 for item in ["1","2","x",999]:
    print(item)
#while 循环
i,str1=1,"1234567"
while i<8:
 if i>6:
     break
 if i==6:
     continue
 print(i)
 i+=1
 #pass 空语句
 def fun1():
    pass# 这里没有这个空语句会报错
~~~
## 其他全局方法
~~~js
 dir()#获取一个对象的所有全局变量和方法 返回的是一个dict类型
 globals()#获取的是全局变量的dict 
 locals() #获取的局部变量的dict

~~~
 ## 数据类型
- 文本类型 str
- 数值类型 int,float,complex
- 布尔类型 False,True
- 序列类型 list,tuple,range
- 映射类型 dict(其实就是字典)
- 集合类型 set,forzenset
-  二进制类型 bytes,byteArray,memoryArray

## Random
>需要导入 import random
~~~js
方法

random.randint(start,end)// [start,end]
random.randrange(start,end)//[start,end)
random.random();//0-1之间的小数
random.uniform(start,end),//[x,y] 不分大小
~~

