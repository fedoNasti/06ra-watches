function WorldClockItem({ city, offset }) {
  return (
    <li>
      <div>{city}</div>
      <div>{offset}</div>
    </li>
  );
}

export default WorldClockItem;