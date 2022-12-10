import React from 'react';
import PropTypes from 'prop-types';


/**
 * Функциональный компонент - цена, должен выполнять
 * запрос на сервер биржы и выводить текущую котировку ресурса
 * и дельту ресурса.
 * @param {string} className имя класса стилей *  
 * @param {string} url адрес биржы *  
 * @param {string} name имя ресурса *  
 */
 export default function Price(props) { 
    const {name,  url, className} = props;
    
}

Price.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired 
  };
