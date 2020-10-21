# 前端概述（三）实战篇

阿里巴巴前端练习生计划课程 - 前端概述 - （三）课程相关项目源代码。


## 一、环境准备

### 1. 安装cnpm、React脚手架

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


### 2. 安装Redux、Rapper

```bash
cnpm i --save redux react-redux
cnpm i --save-dev rap
```

## 二、配置Redux Store、RAP、Rapper

### 1. 配置Rap

访问[raps.taobao.org](http://rap2.taobao.org)，注册账号后，点击 `主菜单 -> 仓库 -> 新建仓库`，仅输入必选的仓库名称后，点提交完成创建。

进入仓库，点击右上角 `Rapper` 按钮，向下拉动，选择 `React + Redux进阶模式`，将第二步的内容（"rapper": "rapper -type ....开头）复制到项目根目录 `package.json` 中的 `scripts` 节点里。

执行命令，同步RAP仓库定义到本地。

```bash
npm run rapper
```

### 2. 配置Redux和Rapper
按照[Rapper进阶模式文档](https://www.yuque.com/rap/rapper/react-install)配置好 `Store` 和 `Root Reducer`

我们首先在项目目录 `src` 下新增一个子目录 `reducers`，来存放redux配置和类型定义:


```ts
// src/reducers/rootReducer.ts
import { IState, IAction } from "./types"
import { combineReducers } from 'redux'
import { rapperReducers } from "rap/runtime/reduxLib"

function shared(state: IState = {}, action: IAction) {
  return state
}

const rootReducer = {
  ...rapperReducers,
  shared,
}

export default combineReducers<IState, IAction>(rootReducer)
```


```ts
// src/reducers/types.ts
export interface IState {

}

export interface IAction {
  type: string
  payload?: any
}
```

最后，需要配置Redux的Store，并引入Rapper提供的middleware，来确保Rapper的正常运作：

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { rapperEnhancer } from './rapper'
require('./rapper/customFetch')

const store = createStore(rootReducer, rapperEnhancer())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```


### 3. 通过Rapper提供的overrideFetch把所有接口代理到RAP2 Mock服务

注意，为了访问RAP Mock服务，而不是真实的线上服务，我们需要在项目 `src/rapper` 文件夹中创建一个新文件： `customFetch.ts`,内容是：

```ts
import { overrideFetch } from './rapper/index'

overrideFetch({
  /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
  prefix: 'http://rap2api.taobao.org/app/mock/{这里填写您的RAP项目ID}',
  fetchOption: {
    /** 全局配置请求 content-type，默认是 'application/json' */
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  },
})
```

完成后，需要在项目入口 `src/index.tsx` 中调用：

```typescript
require('./rapper/customFetch')
```

大功告成!

## 三、实现需求

### 1. 测试fetch一个请求

只要使用Rapper的 `useAPI`，可以轻松便捷的管理请求、数据状态，并实现强类型定义。

```tsx
import React from 'react';
import './App.css';
import { useAPI } from './rapper';

function App() {
  // 可使用自动提示，该接口为创建RAP仓库时的默认接口，路径与DEMO不同
  const [data] = useAPI['GET/example/1603262772330']()
  // 注意这里的data是强类型定义
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  );
}

export default App;

```