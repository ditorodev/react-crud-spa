import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss'


const CardComponent = ({user, deleteUser, modifyUser}) => (
    <article className="card">
        <header>
            <img src={'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'} alt={user.first_name + ' ' + (user.last_name || '')}></img>
            <h3>{user.first_name + ' ' + (user.last_name || '')}</h3>
        </header>
        <div>
            <p onClick={()=>deleteUser(user)}>Eliminar</p>
            <p onClick={()=> modifyUser(Object.assign({},user))}>Editar</p>
        </div>
        <footer>
            <a href={user.twitter}>
                    <i className="fab fa-twitter"></i>
            </a>
            <a href={user.facebook}>
                    <i className="fab fa-facebook"></i>
            </a>
        </footer>
    </article>
);

CardComponent.propTypes = {
    name: PropTypes.object,
    profile_pic: PropTypes.string,
    fav_social: PropTypes.object,
};

export default CardComponent;