import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { validate } from './utils'


function WorldClockForm({ onAddClock }) {
  const [formData, setFormData] = useState({
    city: '',
    offset: '',
    //id: ''
  });

  const [errors, setErrors] = useState({ 
    city: '', 
    offset: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (validationErrors.city || validationErrors.offset) {
      setErrors(validationErrors);
      return;
    }

    setErrors({ city: '', offset: '' });

    const newClock = {
      city: formData.city,
      offset: Number(formData.offset),
      id: uuidv4(),
    }

    setFormData({ city: '', offset: '' });
    onAddClock(newClock);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Название</label>
      <input 
      id="city" 
      name="city" 
      type="text"
      value={formData.city} 
      onChange={handleChange} />
      {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}

      <label htmlFor="offset">Временная зона</label>
      <input 
      id="offset" 
      name="offset" 
      type="number"
      value={formData.offset} 
      onChange={handleChange} />
      {errors.offset && <span style={{ color: 'red' }}>{errors.offset}</span>}

      <button type="submit">Добавить</button>
    </form>
  );
}

export default WorldClockForm