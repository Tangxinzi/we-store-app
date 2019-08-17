# WeStore 电商小程序

[Taro](https://taro.aotu.io) 可以让我们使用 React 的风格来开发小程序，它是京东推出的一套多端统一开发解决方案，可以生成适用于其它平台的应用，比如微信 / 支付宝小程序、H5 应用、React Native 移动端应用等等。

在项目中启动 WeStore 微信小程序，要在项目下面执行一下：

```
npm run dev:weapp
npm run dev:server
```

命令会把应用编译成微信小程序放在指定的目录下面，同时会监听相关文件的变化 ，有变化会重新编译需要的东西。这时可以打开微信开发者工具，新建一个小程序项目，目录可以选择 Taro 项目的根目录。

![](/src/assets/images/WeStore.png)

#### 效果预览

##### 产品

![](/src/assets/images/product.png)

##### 购物袋

![](/src/assets/images/cart.png)
