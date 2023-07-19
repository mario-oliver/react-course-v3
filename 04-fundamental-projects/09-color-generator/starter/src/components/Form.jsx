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
    console.log(hexValue, hslValue, newRgbValue, newHexValue);
    return newHexValue;
  };

  //create a hexToRgb function
  const hexToRgb = (hexValue) => {
    // remove the # from the hex value
    const hex = hexValue.replace('#', '');
    // convert the hex value to rgb
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // return the rgb value
    return { r, g, b };
  };

  //create a rgbToHsl function
  const rgbToHsl = (rgbValue) => {
    // destructure the rgb value
    const { r, g, b } = rgbValue;
    // make r, g, and b fractions of 1
    const rFraction = r / 255;
    const gFraction = g / 255;
    const bFraction = b / 255;
    // find the greatest and smallest channel values
    const cmin = Math.min(rFraction, gFraction, bFraction);
    const cmax = Math.max(rFraction, gFraction, bFraction);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    // calculate the hue
    // no difference
    if (delta === 0) {
      h = 0;
    }
    // red is max
    else if (cmax === rFraction) {
      h = ((gFraction - bFraction) / delta) % 6;
    }
    // green is max
    else if (cmax === gFraction) {
      h = (bFraction - rFraction) / delta + 2;
    }
    // blue is max
    else {
      h = (rFraction - gFraction) / delta + 4;
    }
    h = Math.round(h * 60);
    // make negative hues positive behind 360°
    if (h < 0) {
      h += 360;
    }
    // calculate the lightness
    l = (cmax + cmin) / 2;
    // calculate the saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    // return the hsl value
    return { hue: h, saturation: s, lightness: l };
  };

  //create a hslToRgb function
  const hslToRgb = (hslValue) => {
    // destructure the hsl value
    const { hue, saturation, lightness } = hslValue;
    // make the hue a fraction of 360
    const h = hue / 360;
    // make the saturation and lightness a fraction of 100
    const s = saturation / 100;
    const l = lightness / 100;
    // find the chroma
    const c = (1 - Math.abs(2 * l - 1)) * s;
    // find the x value
    const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
    // find the m value
    const m = l - c / 2;
    // define rgb values
    let r = 0;
    let g = 0;
    let b = 0;
    // set the rgb values based on the hue
    if (0 <= h && h < 1) {
      r = c;
      g = x;
      b = 0;
    } else if (1 <= h && h < 2) {
      r = x;
      g = c;
      b = 0;
    } else if (2 <= h && h < 3) {
      r = 0;
      g = c;
      b = x;
    } else if (3 <= h && h < 4) {
      r = 0;
      g = x;
      b = c;
    } else if (4 <= h && h < 5) {
      r = x;
      g = 0;
      b = c;
    } else if (5 <= h && h < 6) {
      r = c;
      g = 0;
      b = x;
    }
    // shift the rgb values to match the m value
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    // return the rgb value
    return { r, g, b };
  };

  //create an rgb to hex function
  const rgbToHex = (rgbValue) => {
    // destructure the rgb value
    const { r, g, b } = rgbValue;
    // convert the rgb value to hex
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
    // return the hex value
    return `#${rHex}${gHex}${bHex}`;
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
