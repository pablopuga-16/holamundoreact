function App() {
  let items = ["Juan", "Pedro", "Pepe", "Pablo", "Miguel"];
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;