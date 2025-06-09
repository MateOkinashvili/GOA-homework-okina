function App() {
  // wameshala mere vizav mechqareba exla

  function showAll() {
    setPeople(data);
  }

  return (
    <div className="flex gap-4 p-4">
      <input type="text" value={search} onChange={(e) => searchChange(e)} className="b" />
      <button className="bg-purple-600 text-white rounded" onClick={sort}>Sort</button>
      <button className="bg-blue-500 text-white rounded" onClick={check}>Show Favo</button>
      <button className="bg-gray-500 text-white rounded" onClick={check1}>Show Not</button>
      <button className="bg-green-500 text-white rounded" onClick={showAll}>Show Al</button>
    </div>
  );
}