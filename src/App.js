function App() {
  const name = 'Sohee'
  const x = false

  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Number = {1 + 1}</h2>
      <h2>x is true? : {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
