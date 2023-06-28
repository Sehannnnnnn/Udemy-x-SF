import { useState } from 'react';

export default function useForm (initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name);
        setValues((prev) => ({...prev, [name]: value}));
        console.log(values);
    }
    const resetForm = () => {
        setValues(initialValues);
    }
    return {values, handleChange, resetForm}
}