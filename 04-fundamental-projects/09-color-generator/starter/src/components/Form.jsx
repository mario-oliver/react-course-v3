import React, { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');
  const [compColor, setCompColor] = useState('');
  const handleSubmit = (e) => {};

  const generateHex = () => {
    let hexColor = '#';
    const hexValues = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[Math.floor(Math.random() * 16)];
    }
    return hexColor;
  };

  // create a function that generates a complementary color hex valued based on a hex value passed in
  const generateComplementaryHex = (hexValue) => {
    // convert the hex value to rgb
    const rgbValue = hexToRgb(hexValue);
    // convert the rgb value to hsl
    const hslValue = rgbToHsl(rgbValue);
    // add 180 to the hsl value's hue
    hslValue.hue += 180;
    // convert the hsl value back to rgb
    const newRgbValue = hslToRgb(hslValue);
    // convert the rgb value back to hex
    const newHexValue = rgbToHex(newRgbValue);
    // return the new hex value
    return newHexValue;
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
          //   onClick={(e) => setColor(e.target.value)}
        >
          Set Color
        </button>
        <h4 style={{ alignContent: 'center', margin: '.5rem' }}>
          complementary color
        </h4>

        <input type="color" value={compColor} />
        <input type="text" value={compColor} />
      </form>
      <button
        className="btn"
        onClick={() => {
          setColor(generateHex);
          setCompColor(generateComplementaryHex(color));
        }}
        style={{ marginLeft: '1rem' }}
      >
        Random Color
      </button>
    </section>
  );
};

export default Form;
