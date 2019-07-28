import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField';

function Field({ type, index, field, updateField }) {
    const [value, setValue] = useState('');

    return (
        <div>
            <h3><strong>hi field {index+1} this field is: </strong> <a style={{color: 'black'}}>{field.value}</a> </h3> 
            <label>{field.name}: </label>
            <input type={type} value={value} 
            onBlur={ e => {
                setValue(e.target.value);
                updateField(index, value);
            }}
            onChange={e => {
                setValue(e.target.value);
            }}/>
        </div>
    );
}

export function TestForm(props){
    const [fields, setFields] = useState([
        // Required
        {
            name: 'Email',
            value: null,
            type: "email",
            required: true
        },
        {
            name: 'First Name',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Last Name',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Pronoun',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Password',
            value: null,
            type: "password",
            required: true
        },
        {
            name: 'School',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Major',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Year', // Are you trying to do year Started? Graduated? Started College? Fresh/Soph/Jun/Sen/Grad?
            value: null,  
            type: "month", // could also be text or number depending on ^
            required: true 
        },
        {
            name: 'Experience Level',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Preferred Disciplines',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Resume',
            value: null,
            type: "url",
            required: true
        },
        // Optional
        {
            name: 'Preferred Teammates',
            value: null,
            type: "text",
            required: false
        },
        {
            name: 'Portfolio Link',
            value: null,
            type: "url",
            required: false
            
        },
        {
            name: 'Github Link',
            value: null,
            type: "url",
            required: false
        },
        {
            name: 'LinkedIn Link',
            value: null,
            type: "url",
            required: false,
        },
    ]);

    const updateField = (index, value) => {
        const newFields = [...fields];
        const newField = newFields[index];  
        newField.value = value;
        newFields[index] = newField;
        setFields(newFields); 
    };
    // errorstr = `missing required field ${field.name}`;
    
    // TODO: STEVE AND COLETTE DO THIS
    const checkRequiredAndValid = () => {
        for(field in fields) {
            if (field.required && field.value == null) {
                // WOOPSIES
            } else {
                // WE GOOD HOMMIE
            }
            // run correct validation method
        }
    };

    return (
    <div>
        <hi>FORM with {fields.length}</hi>
        <form onSubmit={/*TODO: on submit here*/ e => {
            e.preventDefault();
            // TODO: got stuff to do
            checkRequiredAndValid(); 
        }}>
            {fields.map((field, index) => (
                <Field type={field.type} index={index} field={field} updateField={updateField} />
            ))}
             <input type='submit'/>
        </form>
    </div>
    );
}

