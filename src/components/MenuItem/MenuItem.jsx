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
    this.setState(
      {
        isOpened: !this.state.isOpened,
      },
      () => {
        const item = document.getElementById(this.props.id);
        if (this.state.isOpened) {
          item.classList.add("item__description");
        } else {
          item.classList.remove("item__description");
        }
      }
    );
  };

  render() {
    return (
      <li className='item__container' onClick={this.toggleItemClick}>
        <div className='title__container'>
          <h2>{this.props.title}</h2>
          {this.state.isOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <p id={this.props.id} className='item__description--hidden'>
          {this.props.description}
        </p>
      </li>
    );
  }
}

export default MenuItem;
