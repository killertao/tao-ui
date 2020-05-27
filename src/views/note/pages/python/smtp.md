# smtp 发送邮件 
>smtp邮件传输协议，和http超文本传输协议一样，是在tcp/ip 应用层的一种协议
## 发送文本邮件
~~~python
import smtplib
from email.mime.text import MIMEText
from email.header import Header
rootMsg=MIMEText("你好啊", 'plain', 'utf-8')
rootMsg['To'] =  Header("小虎", 'utf-8')
rootMsg['From'] = Header("李涛", 'utf-8')     # 发送者# 接收者
rootMsg['Subject'] = Header("Python SMTP 邮件测试", 'utf-8')
try: 
    smtpObj = smtplib.SMTP() 
    smtpObj.connect("smpt.qq.com", 25)    # 25 为 SMTP 端口号
    print("链接成功")
    smtpObj.login("979991547@qq.com","xxxx")  #"xxxxx "不是登陆密码，是smptl 授权码，需要开启smtp服务
    print("登陆成功")
    smtpObj.sendmail("979991547@qq.com", [""], rootMsg.as_string())
    print("发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件") 
~~~
## 发送html邮件
> 只需在创建message 的时候吧plian 参数改成html  内容就可以使用html
~~~python
rootMsg=MIMEText("<div style='background:orange'>11111</div>", 'html', 'utf-8')
~~~
## 发送带图片的html邮件 和加附件
>需要引入  MIMEImage, MIMEMultipart 
 此时创建msg 用 MIMEMultipart 创建  
 html 里面图片src="cid:varname"
~~~python
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

rootMsg=MIMEMultipart('related')
rootMsg['To'] =  Header("小虎", 'utf-8')
rootMsg['From'] = Header("李涛", 'utf-8')     # 发送者# 接收者
rootMsg['Subject'] = Header("Python SMTP 邮件测试", 'utf-8')

#创建html  MIMEMultipart  html是存 alternative 这一部分
msgAlternative = MIMEMultipart('alternative')
msgAlternative.attach(MIMEText("<div style='background:orange'><img src="cid:image1"></div>", 'plain', 'utf-8'))
rootMsg.attach(msgAlternative)

# 把图片加入
# 指定图片为当前目录
fp = open('test.png', 'rb')
msgImage = MIMEImage(fp.read())
fp.close()
 
#定义图片 ID，在 HTML 文本中引用
msgImage.add_header('Content-ID', '<image1>')
msgRoot.attach(msgImage)

#构造附件1，传送当前目录下的 test.txt 文件
att1 = MIMEText(open('test.txt', 'rb').read(), 'base64', 'utf-8')
att1["Content-Type"] = 'application/octet-stream'
# 这里的filename可以任意写，写什么名字，邮件中显示什么名字
att1["Content-Disposition"] = 'attachment; filename="test.txt"'
rootMsg.attach(att1)
~~~




