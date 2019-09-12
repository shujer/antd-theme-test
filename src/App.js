import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Table,
  Divider,
  Tag,
  Dropdown,
  Pagination,
  Steps,
  Checkbox,
  Radio,
  message
} from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { Column, ColumnGroup } = Table;
const { Step } = Steps;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

const App = () => {
  const [value, setValue] = useState(1);

  const radioChange = e => {
    console.log("radio checked", e.target.value);
    setValue(Number(e.target.value));
  };

  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const warning = () => {
    message.warning("This is a warning message");
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <section>
              <Form style={{ marginTop: 32 }}>
                <Form.Item
                  label="数字输入框"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                >
                  <InputNumber min={1} max={10} placeholder={"请输入数字"} />
                  <span className="ant-form-text"> 台机器</span>
                  <a href="https://ant.design">链接文字</a>
                </Form.Item>
                <Form.Item
                  label="开关"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                >
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                  label="滑动输入条"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                >
                  <Slider defaultValue={70} />
                </Form.Item>
                <Form.Item
                  label="选择器"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                >
                  <Select defaultValue="lucy" style={{ width: 192 }}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>
                      disabled
                    </Option>
                    <Option value="yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="日期选择框"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                >
                  <RangePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    确定
                  </Button>
                  <Button style={{ marginLeft: 8 }}>取消</Button>
                </Form.Item>
              </Form>
            </section>
            <section>
              <Table dataSource={data}>
                <ColumnGroup title="Name">
                  <Column
                    title="First Name"
                    dataIndex="firstName"
                    key="firstName"
                  />
                  <Column
                    title="Last Name"
                    dataIndex="lastName"
                    key="lastName"
                  />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                  title="Tags"
                  dataIndex="tags"
                  key="tags"
                  render={tags => (
                    <span>
                      {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </span>
                  )}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a>Invite {record.lastName}</a>
                      <Divider type="vertical" />
                      <a>Delete</a>
                    </span>
                  )}
                />
              </Table>
            </section>
            <section style={{ marginBottom: "200px" }}>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
              <div>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
              </div>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <Steps>
                <Step
                  status="finish"
                  title="Login"
                  icon={<Icon type="user" />}
                />
                <Step
                  status="finish"
                  title="Verification"
                  icon={<Icon type="solution" />}
                />
                <Step
                  status="process"
                  title="Pay"
                  icon={<Icon type="loading" />}
                />
                <Step
                  status="wait"
                  title="Done"
                  icon={<Icon type="smile-o" />}
                />
              </Steps>
            </section>
            <section style={{ minHeight: "200px" }}>
              <Button type="primary">主要按钮</Button>
              <Button type="success">成功按钮</Button>
              <Button type="danger">危险按钮</Button>
              <Button type="link">链接文字</Button>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <div>
                <Checkbox.Group
                  options={plainOptions}
                  defaultValue={["Apple"]}
                />
                <br />
                <Checkbox.Group options={options} defaultValue={["Pear"]} />
                <br />
                <Checkbox.Group
                  options={optionsWithDisabled}
                  disabled
                  defaultValue={["Apple"]}
                />
                <br />
                <Radio.Group onChange={radioChange} value={value}>
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              </div>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <div>
                <Pagination showSizeChanger defaultCurrent={3} total={500} />
              </div>
            </section>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
