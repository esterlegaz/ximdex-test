import React from "react";
import "./Menu.scss";
import MenuItem from "./../MenuItem/MenuItem";
import { listMenuItems } from "./../../services/MenuService";
import CircularProgress from "@material-ui/core/CircularProgress";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    listMenuItems()
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="spinner">
            <CircularProgress />
          </div>
        )}
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
      </>
    );
  }
}

export default Menu;
