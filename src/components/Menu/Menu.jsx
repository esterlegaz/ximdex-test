import React from "react";
import "./Menu.scss";
import MenuItem from "./../MenuItem/MenuItem";
import { listMenuItems, createNewItem } from "./../../services/MenuService";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Modal from "./../Modal/Modal";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
      isModalOpened: false,
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

  toggleFormModal = () => {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    });
  };

  createNewItem = (item) => {
    this.setState({
      isLoading: true,
    });
    createNewItem(item)
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
    this.toggleFormModal();
  };

  render() {
    return this.state.isLoading ? (
      <div className='spinner'>
        <CircularProgress />
      </div>
    ) : (
      <div className='menu__container'>
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
        <Button
          onClick={this.toggleFormModal}
          variant='contained'
          color='primary'>
          Nueva entrada
        </Button>
        <Modal
          isOpened={this.state.isModalOpened}
          onHandleClick={this.createNewItem}
          onHandleClose={this.toggleFormModal}
        />
      </div>
    );
  }
}

export default Menu;
