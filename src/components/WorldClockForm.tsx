import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function WorldClockForm({ onAddClock }) {
  const [formData, setFormData] = useState({
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

    const newClock = {
      city: formData.city,
      offset: Number(formData.offset),
      id: uuidv4(),
    }

    onAddClock(newClock);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Название</label>
      <input id="city" name="city" type="text" onChange={handleChange} />

      <label htmlFor="offset">Временная зона</label>
      <input id="offset" name="offset" type="text" onChange={handleChange} />

      <button type="submit">Добавить</button>
    </form>
  );
}

export default WorldClockForm