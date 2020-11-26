import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement(document.body);

export default class LoadingDialog extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={true}
          contentLabel="loading"
          className={"modal"}
          overlayClassName={"overlay"}
        >
          <h2>RCV 로드중...</h2>
          <div>
            <div className="loader" />
          </div>
        </Modal>
      </div>
    );
  }
}
