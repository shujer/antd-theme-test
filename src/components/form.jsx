import React from "react";
import {
  Row,
  Col,
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Slider,
  Button,
  Cascader
} from "antd";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

const App = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form style={{ marginTop: 32 }}>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="输入框"
            wrapperCol={{ span: 18 }}
            labelCol={{ span: 6 }}
          >
            {getFieldDecorator("activityname", {
              rules: [
                { required: true, message: "Please input activity name!" }
              ]
            })(<Input placeholder="活动名称" />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="选择器"
            wrapperCol={{ span: 18 }}
            labelCol={{ span: 6 }}
          >
            <Select
              defaultValue="lucy"
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="级联"
            wrapperCol={{ span: 18 }}
            labelCol={{ span: 6 }}
          >
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="数字输入框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="开关" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item
        label="滑动输入条"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
        <Button style={{ marginLeft: 8 }}>取消</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(App);
