

import './App.css'

// App.jsx or a component file
import { useEffect, useState } from 'react';

function App() {
  return (

  <div style={{ padding: '2rem' }}>
    <h1>My Favorite GIPHY</h1>

    {/* GIPHY embed as an image */}
    <img
  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZubW1jbG1hbnN6MWs1YzlmcG9ldGk5aGUyM2h5dnlsZnduenp0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXblnKXr2BQOaYnTni/giphy.gif"
  alt="Michael Scott"
  width={400}
/>

  </div>
);
}
export default App;
