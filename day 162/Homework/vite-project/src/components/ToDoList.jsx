const Todolist = () => {
  function AddTodolist() {
    setState([...state, value]);
    setValue("");
  }

  function batoni(index) {
    setState((prev) => prev.filter((_, i) => i !== index));
  }

  function knopka(index, value) {
    setKrote(index);
    setProKrote(value);
  }

  function qalbatoni(index) {
    setState((prev) => prev.map((item, i) => (i === index ? proKrote : item)));
    setKrote(null);
    setProKrote("");
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Todolist</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
          <button onClick={AddTodolist} className="bg-blue-600 text-white p-2 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};