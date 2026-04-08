import WorldClockItem from "./WorldClockItem";

function WorldClockList({ clocks }) {
  return (
    <ul className="clock-list">
      {clocks.map((item) => (
        <WorldClockItem key={item.id} city={item.city} offset={item.offset}/>
      ))}
    </ul>
  )
}

export default WorldClockList;