import React from "react";
import "./Menu.scss";
import MenuItem from "./../MenuItem/MenuItem";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <MenuItem
          title="You learn more by studying alone"
          description="Description Item 1"
        />
        <MenuItem
          title="Groups should include students with the same abilities"
          description="In fact, it is better to create groups with people of heterogeneous skills, with different abilities, in order to configure a richer and more disparate group."
        />
      </ul>
    );
  }
}

export default Menu;
