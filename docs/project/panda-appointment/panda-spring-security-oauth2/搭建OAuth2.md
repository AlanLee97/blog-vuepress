# 搭建OAuth2

## 创建项目，添加依赖



## 编写配置类





## 浏览器访问

**访问地址**

```
http://localhost:8079/oauth/authorize?client_id=client&response_type=code
```



**登录页面**


登录进去后跳转到授权页面

**授权页面**


授权成功后自动跳转到之前设置的回调地址，并且会带上授权码

**回调地址和授权码**





## 通过授权码向服务器申请令牌

**postman测试**





