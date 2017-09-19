import React, { Component } from 'react';

class Modal extends Component {
    render() {
        if (this.props.isOpen === false)
            return null

        return (
            <div className="modal">
                <div className="modal__backdrop" onClick={() => this.props.onClose()}></div>
                <div className="modal__content">
                    <h1 className="modal__title">Save from a device</h1>

                    <form className="post-form" action="api/posts/new-post" method="POST" encType="multipart/form-data">
                        <div className="post-form__group">
                            <label>Choose a Pin image</label>
                            <input className="post-form__input post-form--image" name="file" type="file" accept="image/*"/>
                        </div>
                        <div className="post-form__group">
                            <label>Destination URL</label>
                            <input className="post-form__input post-form--url" name="url" type="text"/>
                        </div>
                        <div className="post-form__group">
                            <label>Title</label>
                            <input className="post-form__input post-form--title" name="title" type="text"/>
                        </div>
                        <div className="post-form__group">
                            <label>Description</label>
                            <input className="post-form__input post-form--description" name="description" type="text"/>
                        </div>
                        <button className="post-form__submit">Submit</button>
                    </form>

                    <p><button onClick={() => this.props.onClose()}>Close</button></p>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired
}

export default Modal;