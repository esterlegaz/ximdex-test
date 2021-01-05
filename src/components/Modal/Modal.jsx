import React from "react";
import "./Modal.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleSubmit = () => {
    const newItem = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.onHandleClick(newItem);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const field = target.name;

    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpened}
        onClose={this.props.onHandleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>New Item Form</DialogTitle>
        <DialogContent>
          <form>
            <div className='form__input'>
              <TextField
                required
                name='title'
                variant='outlined'
                label='Título'
                defaultValue={this.state.title}
                onKeyUp={this.handleChange}
              />
            </div>
            <div className='form__input'>
              <TextField
                required
                multilined='true'
                name='description'
                variant='outlined'
                label='Descripción'
                rows='4'
                defaultValue={this.state.description}
                onKeyUp={this.handleChange}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleSubmit}
            disabled={!this.state.title || !this.state.description}
            color='primary'
            autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Modal;
