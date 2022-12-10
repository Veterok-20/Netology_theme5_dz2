import React from 'react';
import PropTypes from 'prop-types';
import RowList from './RowList';

/**
 * Функциональный компонент - список 
 * состоит из компонента <Title> и одного или нескольких компонент
 * <RowList ... /> и имеет свой класс стилей. 
 * @param {string} className имя класса стилей *  
 *   
 */
export default function List(props) {

    return (
        <section>
            <Title />
            <ul>
                <li><RowList /></li>
                <li><RowList /></li>

                <li><RowList /></li>
            </ul>
        </section>
    )
}
