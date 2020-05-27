# python 各个数据类型 基本方法 
>python 每个数据类型都是1个类class（对象） ,在赋值声明的时候生成1个对象   
所以每个类型都有自己的方法和属性
## 文本类型 [参考连接件](https://www.runoob.com/python/python-strings.html)
> 可使用 ' " """ 来声明，但必须保持一致 
  可以用for in 语句遍历，因为实现了itable 接口
~~~
str1='xx'
str2="yy"
~~~
文本基本的运算
~~~python
str1="1234567 \s" %("格式化") #格式化
one=str[0]#取值 可以为负值，区倒数第几个
x=str[1,] #截取
y=str[1,5]
one=one*2
one=one+"xxx"
b="1" in str1
~~~ 

字符串的方法
~~~python
    str1="litao"
    print(str1.capitalize())#首字母大写 Litao
    print(str1.center(11,"*")) #规定长度，居中，一某个字符填充
    string.count(str,beg=0,end=len(stirng)) #返回str 在字符中出现的次数
    string.decode(encoding='UTF-8', errors='strict') # 指定编码格式解码
    string.encode(encoding='UTF-8', errors='strict')# 指定编码格式编码

    # 大小写转换
    string.capitalize()
    string.upper()
    string.lower()
    string.title()
    string.swapcase()
     
    #查找
    string.find()
    string.index()
    string.rfind()
    string.rindex()
    string.startswith()
    string.endswith()
    sring.count()# 计数

    # 去掉空格
    string.strip()
    string.lstrip()
    string.rstrip()

    #对齐填充
    string.center()
    string.ljust()
    string.rjust()

    # 分割 合并
    string.split() 
    string.join()
    string.partition()

    #其他 
    string.replace() #替换
    string.format() # 格式化

~~~
数字的方法 主要是math 模块里面的方法
~~~python
  math.ceil() #向上取整 
  math.floor() #向下取整 可以用运算符号 //代替
  round(x[,n]) #4舍5入  全局方法  x:被操作的数字，n 保留多少为小数，不写，不保留小数
~~~
list 列表 的方法
~~~python
list.append(obj)
list.extend(seq)
list.insert(index,obj)
list.count(obj)# 计数
list.pop([index=-1])
list.remove(obj)
list.reverse()
list.sort(reverse=True)
~~~
dict字典的方法
~~~python
 dict.get(key,default=None)
 dict.setdefault(key,default=None)
 dict.update(dict2)# dict.update({'a':1,'b':2})
 dict.formkeys(seq,value=None) #  dict.formkeys(('a','b')) {'a:':None,}
 dict.keys() #['a','b']
 dict.values() #[None,None]
 dict.items()  #[('a',None),('b',None)]  for key,value in dict.items()
 dict.has_key(key)  #代码key 是否存在   和in是一样的功能  3.0 被删除
 dict.pop(key,default=None) # 
 dict.popitem(item)
~~~
