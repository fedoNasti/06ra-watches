import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { validate } from './utils.ts';
import type { FormData, FormErrors, Clock } from './types';


function WorldClockForm({ onAddClock }: { onAddClock: (clock: Clock) => void}) {
  const [formData, setFormData] = useState<FormData>({
    city: '',
    offset: '',
  });

  const [errors, setErrors] = useState<FormErrors>({ 
    city: '', 
    offset: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
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
    <form className="clock-form" onSubmit={handleSubmit}>
      <div className="clock-form__container">
        <label className="clock-form__title" htmlFor="city">Название</label>
        <input 
        className="clock-form__input"
        id="city" 
        name="city" 
        type="text"
        value={formData.city} 
        onChange={handleChange} />
        {errors.city && <span className="clock-form__error">{errors.city}</span>}
      </div>
      

      <div className="clock-form__container">
        <label className="clock-form__title" htmlFor="offset">Временная зона</label>
        <input 
        className="clock-form__input"
        id="offset" 
        name="offset" 
        type="number"
        value={formData.offset} 
        onChange={handleChange} />
        {errors.offset && <span className="clock-form__error">{errors.offset}</span>}
      </div>
      
      <button className="clock-form__btn" type="submit">Добавить</button>
    </form>
  );
}

export default WorldClockForm