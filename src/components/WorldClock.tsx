import { useState, useEffect } from "react";
import WorldClockForm from "./WorldClockForm";
import WorldClockList from "./WorldClockList";

function WorldClock() {
  const [clockListData, setClockListData] = useState([]);

  const handleAddClock = (newClock) => {
    setClockListData(prev => [...prev, newClock]);
  }

  const handleRemoveClock = (id) => {
    setClockListData(prev => prev.filter(clock => clock.id !== id));
  }

  useEffect(() => {
    console.log('Обновлённый список:', clockListData);
  }, [clockListData]);

  return (
    <>
      <WorldClockForm
        onAddClock={handleAddClock}
      />

      <WorldClockList
        clocks={clockListData}
        onRemoveClock={handleRemoveClock}
      />
    </>
  )
}

export default WorldClock;