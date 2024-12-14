```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Correct: Use useRef to avoid infinite loop
    countRef.current = countRef.current + 1;
    console.log('Updated count:', countRef.current);
  }, []);

  return <div>Count: {countRef.current}</div>;
}

export default MyComponent;
```