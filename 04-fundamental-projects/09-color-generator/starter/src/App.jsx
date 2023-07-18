import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const colorArray = new Values('#f15025').all(10);
  const [colors, setColors] = useState(colorArray);
  // toast.error('error');
  // toast.success('success');
  return (
    <main>
      <Form></Form>
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
