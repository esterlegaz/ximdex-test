import React from "react";
import "./Menu.scss";
import MenuItem from "./../MenuItem/MenuItem";
import { listMenuItems } from "./../../services/MenuService";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    listMenuItems().then((data) => {
      this.setState({
        items: data,
      });
    });
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    );
  }
}

export default Menu;
