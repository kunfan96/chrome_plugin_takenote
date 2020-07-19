### 开发文档

该项目是基于Vue3.0.0-rc.1开发的Chrome插件,开发插件参照文档为[Chrome扩展及应用开发](https://www.ituring.com.cn/book/miniarticle/110929)，开发库文档为[Vue文档](https://v3.vuejs.org/guide/instance.html)

功能：实现可以CRUD的一个记事本

version: 1.0

Tips:

1: 在manifest.json添加`"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"`修复 'unsafe-eval'