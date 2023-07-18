import { useState } from 'react';

//truthy

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  let handleClick = () => {
    if (showAlert) setShowAlert(false);
    else setShowAlert(true);
  };

  return (
    <div>
      {showAlert && <Alert />}
      <button className="btn" onClick={handleClick}>
        Toggle
      </button>
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>;
};

export default ToggleChallenge;
