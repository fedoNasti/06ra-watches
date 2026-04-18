import { useState, useEffect } from "react";
import { updateTime } from './utils.ts';
import type { WorldClockItemProps } from "./types.ts";


function WorldClockItem({ city, offset, id, onRemove }: WorldClockItemProps) {
  const [timeAngle, setTimeAngle] = useState({ seconds: 0, minutes: 0, hours: 0 })
  
  useEffect(() => {
    setTimeAngle(updateTime(offset));

    const interval = setInterval(() => {
      setTimeAngle(updateTime(offset));
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  useEffect(() => {
    console.log('Углы обновились:', timeAngle);
  }, [timeAngle]);

  return (
    <li className="clock-item">
      <button className="clock-btn" onClick={() => onRemove(id)}>X</button>
      <div className="clock-title">{city}</div>
      
      <div className="clock">
        <div 
          className="hand hour-hand" 
          style={{ transform: `translateX(-50%) rotate(${timeAngle.hours}deg)` }}
        ></div>
        <div 
          className="hand minute-hand" 
          style={{ transform: `translateX(-50%) rotate(${timeAngle.minutes}deg)` }}
        ></div>
        <div 
          className="hand second-hand" 
          style={{ transform: `translateX(-50%) rotate(${timeAngle.seconds}deg)` }}
        ></div>
      </div>
    </li>
  );
}

export default WorldClockItem;