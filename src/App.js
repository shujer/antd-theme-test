import React from "react";
import { Layout, Card } from "antd";
import FormApp from "./components/form";
import BreadApp from "./components/breadcrumb";
import MenuApp from "./components/menu";
import PageApp from "./components/pagination";
import DateApp from "./components/datepicker";
import StepApp from "./components/step";
import CheckApp from "./components/checkbox";
import RadioApp from "./components/radio";
import PopApp from "./components/popover";
import NavApp from "./components/nav";
import TableApp from "./components/table"
import DrawerApp from "./components/drawer"
import ModalApp from "./components/modal"
import MsgAPP from "./components/message"
const { Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider theme="light">
        <MenuApp></MenuApp>
      </Sider>
      <Layout theme="light">
        <NavApp></NavApp>
        <Content>
          <BreadApp></BreadApp>
          <Card title="新建活动" style={{ margin: "0 20px 40px 20px" }}>
            <FormApp></FormApp>
            <br></br>
            <br></br>
            <StepApp></StepApp>
            <br></br>
            <br></br>
            <CheckApp></CheckApp>
            <br></br>
            <br></br>
            <PopApp></PopApp>
            <br></br>
            <br></br>
            <TableApp></TableApp>
            <br></br>
            <br></br>
            <DrawerApp></DrawerApp>
            <br></br>
            <br></br>
            <ModalApp></ModalApp>
            <br></br>
            <br></br>
            <MsgAPP></MsgAPP>
          </Card>
          <Card title="待定项" style={{ margin: "0 20px" }}>
            <PageApp></PageApp>
            <br></br>
            <DateApp></DateApp>
            <br></br>
            <br></br>
            <RadioApp></RadioApp>
            <br></br>
            <br></br>
          </Card>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
