import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, HeartOutlined } from '@ant-design/icons';
import { Switch, Route, withRouter} from 'react-router-dom';
import { ROUTE, NAV_ROUTE } from '../../utils/routes';
import KeyListener from '../helpers/KeyEventListener';
import HomePage from '../examples/HomePage';
import SlideOne from '../examples/SlideOne';
import SlideTwo from '../examples/SlideTwo';
import SlideThree from '../examples/SlideThree';
import OneLeft from '../examples/OneLeft';
import OneRight from '../examples/OneRight';
import './index.css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Navogator = styled.div`
  display: block;
  position: fixed;
  bottom: 6%;
  right: 2%;
  width: 50px;
  height: 47px;
  border: 1px solid #ecb6b6;
  border-radius: 16px;
  background: beige;
`;

class SlideController extends Component {
  
  handleKeyPress = ({ code }) => {
    const { history : { push }, location : { pathname} } = this.props;
    console.log(code, pathname, "@@@", this.props, NAV_ROUTE[pathname.replace('/', '')])
    let navigation = NAV_ROUTE['/'];
    if (pathname.length > 1) {
      navigation = NAV_ROUTE[pathname.replace('/', '')];
    }

    console.log(navigation, "$$")
    if (!navigation ||!navigation[code]) {
      return;
    }
    push(navigation[code]);
  }

  ifActive = (key) => {
    debugger
    const { history : { push }, location : { pathname} } = this.props;
    let navigation = NAV_ROUTE['/'];
    if (pathname.length > 1) {
      navigation = NAV_ROUTE[pathname.replace('/', '')];
    }
    if (!navigation) {
      return false;
    }
    return navigation[key];
  }

  getNavigator = () => {
    return (
      <Navogator>
        <Icon type="caret-left" className={ this.ifActive("ArrowLeft") ? "active arrow-left" :"arrow-left"}/> 
        <Icon type="caret-up" className={ this.ifActive("ArrowUp") ? "active arrow-up" :"arrow-up"}/>
        <Icon type="caret-down" className={ this.ifActive("ArrowDown") ? "active arrow-down" :"arrow-down"}/> 
        <Icon type="caret-right" className={ this.ifActive("ArrowRight") ? "active arrow-right" :"arrow-right"}/> 
      </Navogator>
    )
  }

  render() {
    return (
      <Layout>
        <Content>
          <Layout className="site-layout-background">
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <KeyListener handleKeyPress={this.handleKeyPress}>
                <div className="App">
                  <Switch>
                    <Route path={ROUTE.root} exact={true} component={HomePage} />
                    <Route path={ROUTE.slideOne} exact={true} component={SlideOne} />
                    <Route path={ROUTE.OneLeft} exact={true} component={OneLeft} />
                    <Route path={ROUTE.OneRight} exact={true} component={OneRight} />
                    <Route path={ROUTE.slideTwo} exact={true} component={SlideTwo} />
                    <Route path={ROUTE.slideThree} exact={true} component={SlideThree} />
                  </Switch>
                </div>
                {this.getNavigator()}
              </KeyListener>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made with <HeartOutlined /> in India.</Footer>
      </Layout>
    );
  }
}

export default withRouter(SlideController);
