import {useState} from 'react';

const useFormInput = (initialValue, label) =>{
    const[value, setValue] = useState(initialValue);

    return {
        onChange: (e) => setValue(e.target.value),
        value: value,
        name: label,
        placeholder: label,
        label: label
    };
};
export default useFormInput;