import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

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
      <Overlay class="overlay" onClick={onClose}>
        <ModalWindow class="modal">{children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
