import React from 'react';
import PropTypes from 'prop-types';

/**
 * Функциональный компонент - логотип
 * @param {string} className имя класса стилей *  
 * @param {string} url адрес файла, содержащего логотип *  
 * @param {string} text текстовая составляющая логотипа *  
 *  
 */
 export default function Logo(props) { 
    const {url, text, className} = props;
    
}

Logo.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string
  };

Logo.defaultProps = {
    text: '',     
}