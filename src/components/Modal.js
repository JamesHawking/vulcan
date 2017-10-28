import React, {Component} from 'react';

class Modal extends Component {
  closeModal = () => {
    this.props.closeModal(); 
  } 

  render() {
    return (
      <div className={this.props.showModal ? "modal active" : "modal"}>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={this.closeModal} className="btn btn-clear float-right"></button>
          <div className="modal-title h5">Modal title</div>
        </div>
        <div className="modal-body">
          <div className="content">
            {this.props.data}
          </div>
        </div>
        <div className="modal-footer">
          ...
        </div>
      </div>
      </div>
    );
  }
}

export default Modal;
