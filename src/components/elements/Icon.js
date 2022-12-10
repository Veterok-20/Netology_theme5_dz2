import React from 'react';
import PropTypes from 'prop-types';


/**
 * Функциональный компонент - иконка
 * @param {string} className имя класса стилей *  
 * @param {string} url адрес иконки *  
 */
 export default function Icon(props) { 
    const {url, className} = props;
    
}

Icon.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string    
  };
