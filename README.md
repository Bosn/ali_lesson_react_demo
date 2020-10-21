# 前端概述（三）实战篇

阿里巴巴前端练习生计划课程 - 前端概述 - （三）课程相关项目源代码。


### 一、环境准备

1. 安装cnpm、React脚手架

首先，安装cnpm ([文档](https://developer.aliyun.com/mirror/NPM))，可以大幅度加速npm安装包的速度。

然后安装脚手架，其中 `ali_lesson_react_demo` 为项目文件夹名称，执行该命令会将脚手架建立在该文件夹中。

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
npx create-react-app ali_lesson_react_demo --template typescript
cd ali_lesson_react_demo
cnpm i
cnpm start
```

注意Mac系统npm install -g需要前面加sudo

完成后，将自动打开浏览器，并进入React Demo，环境配置完成。


2. 安装Redux、Rapper

```bash
cnpm i --save redux react-redux
cnpm i --save-dev rap
```

3. 配置RAP

访问[raps.taobao.org](http://rap2.taobao.org)，注册账号后，点击 `主菜单 -> 仓库 -> 新建仓库`，仅输入必选的仓库名称后，点提交完成创建。

进入仓库，点击右上角 `Rapper` 按钮，向下拉动，选择 `React + Redux进阶模式`，将第二步的内容（"rapper": "rapper -type ....开头）复制到项目根目录 `package.json` 中的 `scripts` 节点里。

执行命令，同步RAP仓库定义到本地。

```bash
npm run rapper
```

4. 测试fetch一个请求