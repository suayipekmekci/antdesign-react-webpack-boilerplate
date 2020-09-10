import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

import './style.scss';

class HeaderComponent extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.props.sidebarCollapse(!this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Header id="headerContainer">
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger sidebarTrigger',
          onClick: this.toggle,
        })}
      </Header>
    );
  }
}

export default HeaderComponent;

