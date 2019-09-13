import React from "react";
import { Pagination } from "antd";

function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}
export default () => (
  <Pagination
    showQuickJumper
    defaultCurrent={2}
    total={500}
    onChange={onChange}
  />
);
