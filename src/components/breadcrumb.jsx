import React from "react";
import { Breadcrumb, Icon } from "antd";

export default () => (
  <Breadcrumb style={{margin: "5px 10px"}}>
    <Breadcrumb.Item>
      <Icon type="left-circle" />
      <span>首页</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">活动管理</Breadcrumb.Item>
    <Breadcrumb.Item>活动详情</Breadcrumb.Item>
    <Breadcrumb.Item>新建活动</Breadcrumb.Item>
  </Breadcrumb>
);
