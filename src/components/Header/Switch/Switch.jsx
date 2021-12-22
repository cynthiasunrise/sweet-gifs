import { useEffect, useState } from 'react';
import { loadTheme, toggleTheme } from '../../../utils/themes';

function Switch() {
  const [switchValue, setSwitchValue] = useState(null);

  useEffect(() => {
    setSwitchValue(loadTheme());
  }, []);

  const handleToggleTheme = () => {
    toggleTheme(!switchValue);
    setSwitchValue((switchValue) => !switchValue);
  };

  return (
    <label
      role="switch"
      aria-checked={switchValue}
      onClick={handleToggleTheme}
      className={`toggle--label ${!switchValue && 'dark'}`}
    >
      <span
        className={`toggle--label-background ${!switchValue && 'dark'}`}
      ></span>
    </label>
  );
}

export default Switch;
