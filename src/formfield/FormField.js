import React from 'react';
import 'bulma/css/bulma.css';
import './Formfield.css'

const FormField = ({label, type, placeholder}) => {
    return (
      <div className='field'>
        <label className='label'>{label}</label>
        <div class="control">
            <input class="input" type={type} placeholder={placeholder}/>
        </div>
      </div>
    );
  };

export default FormField