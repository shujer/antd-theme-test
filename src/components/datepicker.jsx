import React from "react";
import { DatePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => (
  <div>
    <RangePicker onChange={onChange} />
  </div>
);
