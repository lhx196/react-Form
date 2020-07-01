# react-Form

基于移动端 H5 最近对于表单开发的需求较多，本人抱着学习的心态在基于 react + typescript + rc-field-form + antdesign-mobile 尝试二次封装了一套组件

整体相关配置具体可参考相应官方文档开发指南：<br>

create react app:https://www.html.cn/create-react-app/docs/getting-started/
rc-field-form(一个基于 react 表单封装库，参考蚂蚁金服 UI 库 Form 表单封装):https://www.npmjs.com/package/rc-field-form#rule
antdesign-mobile(蚂蚁金服移动端 UI 库，在实际项目开发中可按照设计图自行开发 UI 组件):https://mobile.ant.design/
less 配置(customize-cra + react-app-rewired):
customize-cra:https://github.com/arackaf/customize-cra/blob/master/api.md
react-app-rewired:https://github.com/timarney/react-app-rewired/blob/master/README_zh.md

## 目录结构（与表单相关）

- src - 源代码，开发项目过程中，一般只会动这里的代码
  - components - 全局组件，会被页面复用的组件
    - form.tsx - 封装的公用表单库
  - pages
    - form - 表单使用页面示例
