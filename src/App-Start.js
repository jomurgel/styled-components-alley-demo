// Dependencies.
import React, { useState } from 'react';

const App = () => {
  const [checked, setCheckedState] = useState(false);
  const inlineStyle = {
    color: checked ? '#18a8f1' : '#000',
    textDecoration: checked ? 'line-through' : 'none',
  };
  return (
    <div className="app" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
      <h1 style={{ fontSize: 42, borderBottom: '2px dashed #ffcc00' }}>Let's demo!</h1>
      <p style={{ color: '#C71585', margin: '0 0 25px' }}>
        This is a simple React app!
      </p>
      <p style={{ color: '#dc7093', margin: '0 0 25px' }}>
        We're not using styled-components yet, but soon!
      </p>
      <h2 style={{ fontStyle: 'italic' }}>Our Goals:</h2>
      <form>
        <div>
          <label htmlFor="one">
            <input
              checked={checked}
              id="one"
              onChange={() => setCheckedState(! checked)}#18af
              type="checkbox"
            />
            <span style={inlineStyle}>What and why is styled-components? <span role="img" aria-label="Thinking emoji">🤔</span></span>
          </label>
        </div>
        <div>
          <label htmlFor="two">
            <input type="checkbox" id="two" />
            <span>How do I styled-components? <span role="img" aria-label="Painting nails emoji">💅</span></span>
          </label>
        </div>
        <div>
          <label htmlFor="three">
            <input type="checkbox" id="three" />
            <span>I can haz themes? <span role="img" aria-label="Cat emoji">🐱</span></span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
