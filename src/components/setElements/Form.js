import React from 'react';
import PropTypes from 'prop-types';

/**
 * Функциональный компонент - форма, это контролируемый компонент, 
 * имеет свое состояние и состоит из поля ввода <input> и 
 * управляющей кнопки submit. 
 * Имеет свой класс стилей. 
 * @param {string} className имя класса стилей *  
 * @param {string} text надпись на кнопке *  
 * @param {func} onClick обработчик нажатия кнопки *  
 * @param {func} onChange обработчик ввода/удаления символа *  
 *   
 */
 export default function Form(props) {
// ...
    return (
        <form onSubmit={onClick}>       
          <input type="text" value={state.value} onChange={onChange} />      
        <input type="submit" value={text} />
      </form>
    )
}

Form.propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    text: PropTypes.string
  };

Form.defaultProps = {
    text: '',     
}