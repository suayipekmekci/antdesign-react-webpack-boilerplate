import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout} from 'antd';
const {Content } = Layout;

import Routes from '../routes';
import Header from './Header';
import Navigate from './Navigate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle (code) {
    this.setState({
      collapsed: code
    });
  }
  render() {
    return (
      <Layout className="layoutContentInner">
        <Navigate collapse={this.state.collapsed}/>
        <Layout>
          <Header sidebarCollapse={this.toggle}/>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Routes/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default hot(App)
