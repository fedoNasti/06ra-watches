import WorldClockItem from "./WorldClockItem";
import type { WorldClockListProps } from "./types";

function WorldClockList({ clocks, onRemoveClock }: WorldClockListProps) {

  return (
    <ul className="clock-list">
      {clocks.map((item) => (
        <WorldClockItem 
        key={item.id} 
        city={item.city}
        id={item.id} 
        offset={item.offset}
        onRemove={onRemoveClock}
        />
      ))}
    </ul>
  )
}

export default WorldClockList;