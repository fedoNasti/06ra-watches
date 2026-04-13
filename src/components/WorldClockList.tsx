import WorldClockItem from "./WorldClockItem";

function WorldClockList({ clocks, onRemoveClock }) {

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