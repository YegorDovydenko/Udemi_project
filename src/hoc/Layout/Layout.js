import React from "react";
import { connect } from "react-redux";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import classes from "./Layout.module.scss";

class Layout extends React.Component {
  state = {
    menu: false,
  };

  toogleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  
  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthentificated={this.props.isAuthentificated}
        />

        <MenuToggle
          onToggle={this.toogleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
