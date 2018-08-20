import React from 'react';
import { Layout, Icon } from 'antd';
const { Header } = Layout;
import './style.scss';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.props.sidebarCollapse(!this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Header id="headerContainer">
        <Icon
          className="trigger sidebarTrigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}

export default HeaderComponent;
