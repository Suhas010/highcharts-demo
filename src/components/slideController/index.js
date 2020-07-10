import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { withRouter} from 'react-router-dom';
import { NAV_ROUTE } from '../../utils/routes';
import KeyListener from '../helpers/KeyEventListener';

import './index.css'
import ContentContainer from './ContentContainer';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;
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

const SlideController = (props) => {
  console.log(props)
  const handleKeyPress = ({ code }) => {
    const { history : { push }, location : { pathname} } = props;
    // console.log(code, pathname, "@@@", NAV_ROUTE[pathname.replace('/', '')])
  }

  const handleMenuChange = ({key}) => {
    const { history : { push }} = props;
    push(key);
  }

  const getMenu = () => {
    return NAV_ROUTE.map(({title, path, subMenu}) => {
      if(subMenu.length >0 ) {
        return (
          <SubMenu key={path} title={title}>
            {subMenu.map(({ title, path }) => (
               <Menu.Item key={path}>{title}</Menu.Item>
            ))}
          </SubMenu>
        );
      }
      return <Menu.Item key={path}>{title}</Menu.Item>;
    })
  };
  const getActivePath = () => {
    const { location : { pathname }} = props;
    return pathname;
  };
  return (
    <Layout>
      <Content>
        <Layout className="site-layout-background">
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              selectedKeys={[getActivePath()]}
              defaultSelectedKeys={[getActivePath()]}
              defaultOpenKeys={[getActivePath()]}
              style={{ height: '100%' }}
              onClick={handleMenuChange}
            >
              {getMenu()}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 500 }}>
            <KeyListener handleKeyPress={handleKeyPress}>
             <ContentContainer props={props}/>
            </KeyListener>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made with <HeartOutlined /> in India.</Footer>
    </Layout>
  );
}

export default withRouter(SlideController);
