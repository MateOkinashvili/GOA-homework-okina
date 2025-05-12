function Box({ number, color }) {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: color, margin: 10 }}>
      <h3>{number}</h3>
    </div>
  );
}
export default Box;
