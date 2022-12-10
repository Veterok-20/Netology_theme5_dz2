import React from 'react';
import PropTypes from 'prop-types';

/**
 * Функциональный компонент - строка списка 
 * состоит из нескольких необязательных компонент: 
 * <Icon ... />, <Link .../>. При этом в строку списка 
 * обязательно передается либо компонент <Link .../> либо
 * пропс - text
 * @param {string} className имя класса стилей *  
 *   
 */
 export default function RowList(props) { 
   
    return (
        <div>
        <Icon  />
        <Link  />       
        </div>
    )
}