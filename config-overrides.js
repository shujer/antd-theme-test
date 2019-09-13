const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#fabb28", //主色
      "@sub-color": "#fed061", //辅助颜色（自定义）?
      "@link-color": "#40a9ff", //链接、说明 ?
      "@info-color": "@primary-color", //提醒
      "@success-color": "#1dcc74", //成功
      "@processing-color": "@primary-color", //加载
      "@error-color": "#ff6166", //错误
      "@highlight-color": "@error-color", //高亮
      "@warning-color": "@primary-color", //警告

      "@primary-1": "#f5f6f7", //列表悬停色 ?
      "@primary-2": "#edeef0", // 列表激活颜色 ?
      "@primary-5": "@primary-color", // color used to control the text color in many active and hover states

      "@border-color-base": "#dfdfdf", //线框
      "@border-color-split": "#ededed", //分割线
      "@body-background": "#f5f6f7", //全局背景色、悬停色
      "@component-background": "#fff", //组件默认背景色

      "@background-color-light": "#f7f8fa", // background of header and selected item
      "@menu-item-color": "#666666", //菜单列表颜色
      "@menu-item-active-bg": "#fffaf0",

      "@text-color": "#363636", //一级重要文字
      "@text-color-secondary": "#999999", // 次要文字
      "@text-color-normal": "#666666",// 普通字体颜色（自定义）

      "@font-family": `'PingFang SC', 'Helvetica Neue',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol'`, //字体
      "@font-size-base": "14px", //正文、大篇幅文字段落
      "@font-size-sm": "12px", //辅助性文字
      "@heading-1-size": "20px", //一级标题
      "@heading-2-size": "18px", //二级标题
      "@heading-3-size": "16px", //卡片标题 ?
      "@border-radius-base": "3px", //圆角

      "@btn-primary-color": "@text-color", // 主要按钮颜色
      "@btn-primary-bg": "@sub-color", // 主要按钮背景颜色
      "@btn-danger-bg": "@error-color", // 错误按钮背景颜色
      "@btn-danger-border": "@error-color", 
      "@btn-shadow": "0 2px 6px rgba(0, 0, 0, 0.015)",//按钮投影
      "@btn-primary-shadow": "0 2px 6px rgba(42,62,100 0.015)",//主要按钮投影 
      "@btn-text-shadow": "none",//按钮文字投影 
      "@btn-font-size-lg": "14px", // 大号按钮字体大小 
      "@btn-font-size-sm": "12px", // 小号按钮字体大小 
 
      "@background-color-base": "#f5f6f7", //默认背景颜色

      "@breadcrumb-link-color": "@sub-color", //面包屑链接颜色 
      "@breadcrumb-link-color-hover": "@primary-color", //面包屑链接悬停颜色 

      "@pagination-item-size": "28px", //分页按钮大小

      "@input-height-base": "28px", //中号输入框高度
      "@input-height-lg": "32px", //大号输入框高度

      "@table-header-color": "@text-color-normal", //表格标题颜色

      "@drawer-header-padding": "14px 20px",//抽屉样式
      "@drawer-body-padding": "30px",

      "@modal-body-padding": "30px",// 对话框样式

      "@message-notice-content-padding": "10px 20px"//消息样式
    }
  })
);
