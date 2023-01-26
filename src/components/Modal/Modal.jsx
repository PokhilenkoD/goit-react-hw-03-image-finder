import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeWindowEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeWindowEsc);
  }

  closeWindowEsc = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children, onClose } = this.props;
    return createPortal(
      <Overlay onClick={onClose}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalIsShow: PropTypes.bool.isRequired,
};
