# ucan项目前端界面

 author:thl

 该项目依赖 webpack2 构建工具 + vue2 前端界面框架 + 饿了吗团队 基于vue element UI 后台管理桌面UI组件

 https://webpack.js.org  中文文档:http://www.css88.com/doc/webpack2/

 https://cn.vuejs.org/ (中文的)

 http://element.eleme.io (中文的)

开发环境  

第一步 安装 node.js 稳定版本就行

第二步 package.json 是安装的依赖 (有项目依赖和本地开发依赖)
 

 打开cmd  直接 npm install 就可  (或者安装cnpm淘宝镜像 cnpm代替npm 速度快些)


 打开本地服务器 npm start


 发布生产代码 npm run bulid 

 生产代码将打包至 dist文件下 (可随便起名)


 ## 目录说明
项目的目录树如下：

   src ┌─components (组件的目录及文件)
       ├assets  (静态的图片或者css文件 )
       ├router  (index.js 配置vue-router路由)
       ├─App.vue (项目app的根组件 以及css的样式重置)
       ├─index.esj (html-webpack-plugin 插件引入的 html模板)
       ├─main.js   (项目的根js文件)

static ┌─mock (本地写的json数据)

webpack.config.js   (运行webpack的配置文件)

base.js (基于本地开发和生产开发 共用的一些配置)

dev.js  (基于本地开发的配置 用webpack-merge 插件 结合 base.js)
   
prod.js (基于生产开发的 用webpack-merge 插件 结合 base.js) 

package.json 里的 用node 命令去起

  "scripts": {
    "start": "webpack-dev-server --config dev.js", (直接 npm start 就可以 起本地服务 热加载 )
    "build": "webpack --config prod.js"  (npm run build 就是发布生产代码 可以把生产的代码上传到服务器)
  }, 


以上这些只是本人个人所配置 其简单易懂

如需自加一些功能可能活配置

还可以参照 vue 官方推出的脚手架配置  以下是原文 官网上有


Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：

# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。

对于大陆用户，建议将 npm 的注册表源设置为国内的镜像，可以大幅提升安装速度。
 






