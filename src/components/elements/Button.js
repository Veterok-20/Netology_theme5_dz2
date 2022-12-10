import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

/**
 * Функциональный компонент - кнопка, возвращает стилизованную кнопку, 
 * которая может содержать иконку и может являться ссылкой или 
 * запускать обработчик собятия нажатия кнопки 
 * @param {string} className имя класса стилей *  
 * @param {string} urlicon адрес иконки *  
 * @param {string} urllink адрес ссылки *  
 * @param {string} text текст на кнопке *  
 * @param {func} onClick обработчик события нажатия кнопки   
 */
 export default function Icon(props) { 
    const {urlicon, urllink, onClick, className} = props;
    
}

Button.propTypes = {
    urlicon: PropTypes.string,
    urllink: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };

Button.defaultProps = {
    text: '', 
    urlicon: '',
    urllink: '',
    noClick: null    
}