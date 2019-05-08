import React from 'react';

import './Modal.scss';


function Modal ({show, saveHandler, closeHandler, changeHandler, user}) {

        return (
            <div className={"modal " + (show ? "" : "hide")}>
                <div className="modal-container">
                    <div className="modal__body">
                        <label>Nombre: </label><input  type="text" name="first_name" value={user.first_name} onChange={changeHandler} required/>
                        <label>Apellido: </label><input  type="text" name="last_name" value={user.last_name} onChange={changeHandler} required/>
                        <br/> <br/>
                        Redes Sociales: <br /><br />
                        <label>Twitter: </label><input  type="text" name="twitter" value={user.twitter} onChange={changeHandler} />
                        <label>Facebook: </label><input  type="text" name="facebook" value={user.facebook} onChange={changeHandler} />
                    </div>
                    <div className="modal__footer">
                        <div className="button button--close" onClick={closeHandler}>
                            <i className="fas fa-times"></i> Cerrar
                        </div>
                        <div className="button button--save" onClick={saveHandler}>
                            <i className="fas fa-check"></i> Guardar
                        </div>
                    </div>
                </div>
            </div>
        );
}

Modal.propTypes = {};

export default Modal ;