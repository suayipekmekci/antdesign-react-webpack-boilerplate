import React,{ Component } from 'react';
import { HashRouter , Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import {
  HomeOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
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
        <HashRouter>
          <div className="logo">
            LOGO
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              <span>Home</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/about">
                <span>About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </Menu.Item>
          </Menu>
        </HashRouter>
      </Sider>
    );
  }
}

export default Navigate;
