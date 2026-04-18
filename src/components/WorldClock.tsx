import { useState, useEffect } from "react";
import WorldClockForm from "./WorldClockForm";
import WorldClockList from "./WorldClockList";
import type { Clock } from "./types";

function WorldClock() {
  const [clockListData, setClockListData] = useState<Clock[]>([]);

  const handleAddClock = (newClock: Clock) => {
    setClockListData(prev => [...prev, newClock]);
  }

  const handleRemoveClock = (id: string) => {
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