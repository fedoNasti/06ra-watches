export const validate = (formData) => {
  const newErrors = { city: '', offset: '' };
  
  // Проверка города
  if (!formData.city.trim()) {
    newErrors.city = 'Введите название города';
  }
  
  // Проверка смещения
  const offsetNum = Number(formData.offset);
  if (isNaN(offsetNum)) {
    newErrors.offset = 'Введите число';
  } else if (offsetNum < -12 || offsetNum > 14) {
    newErrors.offset = 'Смещение должно быть от -12 до +14';
  }
  
  return newErrors;
};

export const updateTime = (offset) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + offset * 3600000);
  //const time = cityTime.toLocaleTimeString([], { hour12: false });
   
  const seconds = cityTime.getSeconds();
  const minutes = cityTime.getMinutes();
  const hours = cityTime.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  
  return {seconds: secondAngle, minutes: minuteAngle, hours: hourAngle };
    
}
