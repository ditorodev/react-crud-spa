import PropTypes from 'prop-types';
import React from 'react';

import './Modal.scss';

function Modal ({show, saveHandler, closeHandler}) {
        return (
            <div className={"modal " + (show ? "" : "hide")}>
                <div className="modal-container">
                    <div className="modal__body">
                        <label>Nombre: </label><input type="text" name="first_name" required/>
                        <label>Apellido: </label><input type="text" name="last_name"required/>
                        <br/> <br/>
                        Redes Sociales: <br /><br />
                        <label>Twitter: </label><input type="text" name="twitter"/>
                        <label>Facebook: </label><input type="text" name="twitter"/>

                    </div>
                    <div className="modal__footer">
                        <div className="button button--close" onClick={closeHandler}>
                            <i className="fas fa-times"></i> Cerrar
                        </div>
                        <div className="button button--save">
                            <i className="fas fa-check"></i> Guardar
                        </div>
                    </div>
                </div>
            </div>
        );
}

Modal.propTypes = {};

export default Modal ;