import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const {Sider } = Layout;
import './style.scss';

class Navigate extends Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  shouldComponentUpdate(nextProps, nextState){
      if(nextProps.collapse != this.state.collapsed){
        this.setState({
          collapsed: nextProps.collapse
        });
      }
      return true;
  }
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        id="navigateContainer"
      >
        <div className="logo">
          LOGO
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
           <a href="#/">
            <Icon type="home" />
            <span>Home</span>
           </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#/about">
              <Icon type="video-camera" />
              <span>About</span>
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#/contact">
              <Icon type="upload" />
              <span>Contact</span>
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Navigate;
