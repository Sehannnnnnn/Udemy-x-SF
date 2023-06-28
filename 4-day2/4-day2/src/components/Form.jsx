import React from 'react'
import useForm from '../hooks/useForm'

const Form = () => {
    const {values, handleChange, resetForm} = useForm({
        name : '',
        age : '',
    });
  return (
    <form>
        <input type="text" name="name" value={values.name} onChange={handleChange}></input>
        <input type="number" name="age" value={values.age} onChange={handleChange}></input>
    </form>
  )
}

export default Form