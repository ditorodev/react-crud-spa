import React, { Component } from 'react';

import CardComponent from './Card';

class Contacts extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            contacts: [{
              name: {
              first_name: 'Juan',
              last_name: 'Di Toro'
              },
              fav_social: ['twitter', 'facebook'],
              social_link: ['']
          },
          {
            name: {
            first_name: 'Jose',
            last_name: 'Di Toro'
            },
            fav_social: ['twitter', 'facebook'],
            social_link: ['']
      
        }]
    };
    }

    render() {
        return (
            <div className="contacts-container">
                {this.state.contacts.map((item, key) =>{
                    return (<CardComponent name={item.name} fav_social={item.fav_social} profile_pic={item.profile_pic} id={key}/>);
                })}
            </div>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;