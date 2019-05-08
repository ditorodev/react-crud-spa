import React, { Component } from 'react';
import _ from 'lodash';
import './Contacts.scss';

import CardComponent from './Card';
import Modal from './Modal';
import { tsImportEqualsDeclaration } from '../../node_modules/@babel/types';
 

class Contacts extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            newUser: {
                first_name: '',
                last_name: '',
                twitter: '',
                facebook: ''
            },

            showModal: false,
            contacts: [],
            modalSaveHandler: this.saveDataModal.bind(this),
            // modalSaveHandler: this.saveDataModal.bind(this)
        };


        this.checkContactInState = this.checkContactInState.bind(this);
        this.addContact = this.addContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.saveDataModal = this.saveDataModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateContact = this.updateContact.bind(this);
    }
    /**
     * add new contact to state
     * @param  {Object} contact contact object
     * @returns {Boolean} true if added correctly, false if contact is already on state
     */
    addContact(contact) {

        if(this.checkContactInState(contact)) return false;

        const newContacts = this.state.contacts;
        newContacts.push(contact);

        this.setState({contacts: newContacts});
        return true;
    }
    /**
     * removes contact from state
     * @param  {Object} contact contact object
     */
    removeContact(contact) {
        const newContacts = this.state.contacts.filter(arr_contact => !_.isEqual(contact, arr_contact));
        
        this.setState({contacts: newContacts});
    }
    /**
     * edits contact info
     * @param  {Object} contact contact object
     */
    editContact(contact){
        
        this.setState({
            newUser: contact,
            oldUser: Object.assign({}, contact)
        });
        this.toggleModal();

        this.setState({
            modalSaveHandler: this.updateContact
        });
        
    }
    
    updateContact() {
        const newInfo = this.state.newUser;
        const oldInfo = this.state.oldUser;

        const newContacts = this.state.contacts;
        let index = newContacts.findIndex(arr_contact => _.isEqual(arr_contact, oldInfo));
        newContacts[index] = newInfo;

        this.setState({contacts: newContacts});
        this.toggleModal();

    }

    /**
     * checks if contact is already in state
     * @param  {Object} contact contact to check in state
     * @returns {Boolean} true if there is a user, false if no user found
     */
    checkContactInState(contact) {
        const res = this.state.contacts.filter(arr_contact => _.isEqual(arr_contact, contact));
        return res.length >= 1;
    }

    toggleModal() {
        this.setState(state => ({
            showModal: !state.showModal
        }));
    }

    saveDataModal() {
        this.addContact(this.state.newUser);
        this.setState(state => ({
            newUser: {
                first_name: '',
                last_name: '',
                twitter: '',
                facebook: ''
            }
        }));
        this.toggleModal();
    }


    addHttp(url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
        
           url = "http://" + url;
        }
        return url;
     }
    handleChange(event) {
        // event.preventDefault();
        let newState = this.state.newUser;
        switch (event.target.name){
            case 'first_name': 
                newState.first_name = event.target.value;
                this.setState({newUser: newState});
            break;
            case 'last_name': 
                newState.last_name = event.target.value;
                this.setState({newUser: newState});

            break;
            case 'twitter': 
                newState.twitter = this.addHttp(event.target.value);
                this.setState({newUser: newState});

            break;
            case 'facebook': 
                newState.facebook = this.addHttp(event.target.value);
                this.setState({newUser: newState});

            break;
            default:
            break;

        }
    }

    render() {
        return (
            <div>
                <div className="contacts-container">
                    {this.state.contacts.map((item, key) =>{
                        return (<CardComponent user={item} key={key} deleteUser={this.removeContact} modifyUser={this.editContact}/>);
                    })}
                    <div className="card add-contact" >
                        <button onClick={this.toggleModal}> 
                            Añadir Nuevo Contacto
                        </button>
                    </div>
                </div>
                <Modal 
                    user={this.state.newUser}
                    closeHandler={this.toggleModal} 
                    show={this.state.showModal} 
                    saveHandler={this.state.modalSaveHandler}
                    changeHandler={this.handleChange}
                    > 
                </Modal>
            </div>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;