import React from "react";
import "./MenuItem.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  toggleItemClick = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };

  render() {
    return (
      <li className="item__container">
        <div className="title__container">
          <h2>{this.props.title}</h2>
          {this.state.isOpened ? (
            <ExpandLessIcon onClick={this.toggleItemClick} />
          ) : (
            <ExpandMoreIcon onClick={this.toggleItemClick} />
          )}
        </div>
        {this.state.isOpened && (
          <p className="item__description">{this.props.description}</p>
        )}
      </li>
    );
  }
}

export default MenuItem;
