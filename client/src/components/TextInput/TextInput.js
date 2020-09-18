import React from 'react'
import { Input } from 'reactstrap';
import { useFormContext } from 'react-hook-form';

const TextInput = ({ type, name, id, placeholder, invalid = false }) => {
    const { register } = useFormContext();
    return (
        <div>
            <Input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                innerRef={register}
                invalid={invalid}
            />
        </div>
    )
}

export default TextInput