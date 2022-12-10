import React from 'react';
import PropTypes from 'prop-types';

/**
 * Функциональный компонент - баннер, возвращает баннер и кнопку,
 * имеет класс стилей
 * @param {string} className имя класса стилей *  
 * @param {string} src адрес файла, содержащего баннер *  
 * @param {string} text текст кнопки *  
 *  
 */
 export default function Banner(props) { 
    const {src, text, className} = props;
    
    return (
        <>
        <img />
        <Button />
        </>
    )
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string
  };

Banner.defaultProps = {
    text: '',     
}