import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';

const App = () => {
  const colorArray = new Values('#f15025').all(10);
  const [colors, setColors] = useState(colorArray);
  return (
    <main>
      <Form></Form>
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
