import React from 'react';
import PropTypes from 'prop-types';


/**
 * Функциональный компонент - ссылка
 * @param {string} text текст ссылки
 * @param {string} url адрес ссылки
 * @param {string} className имя класса стилей *  
 */
export default function Link(props) {
    const {text, url, className} = props;
   
}

Link.propTypes = {
    url: PropTypes.string.isRequired,   
    text: PropTypes.string.isRequired,   
    className: PropTypes.string,
  };

Link.defaultProps = {
    text: '', 
    url: '',   
}