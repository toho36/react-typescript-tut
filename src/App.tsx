import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number | null>(null);
  return (
    <div className="App">
      <button onClick={() => setCount((count || 0) + 1)}>Add</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
