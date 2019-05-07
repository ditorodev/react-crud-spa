import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss'

const CardComponent = ({name, profile_pic, fav_social, social_link }) => (
    <article className="card">
        <header>
            <img src={profile_pic || 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'} alt={name.first_name + ' ' + (name.last_name || '')}></img>
            <h3>{name.first_name + ' ' + (name.last_name || '')}</h3>
        </header>
        Hellooooo {name.first_name}
        <footer>
            <h3>Favorite Social Networks: </h3>
            {fav_social.map((item, index) => {
                return <a href={social_link ? social_link[index] : '#'}><i className={`fab fa-${item}`} id={index}></i></a>
            })}
        </footer>
    </article>
);

CardComponent.propTypes = {
    name: PropTypes.object,
    profile_pic: PropTypes.string,
    fav_social: PropTypes.array,
};

export default CardComponent;