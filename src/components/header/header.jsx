import "./header.css";
import Switch from "react-switch";

export const Header = ({ darkTheme, setDarkTheme }) => {
  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="Header">
      <ul>
        <a href=".Header">
          <li>Home</li>
        </a>
        <li>Games</li>
        <li>Store</li>
        <li>Discover</li>
        <li>About us</li>
      </ul>
      <Switch onChange={handleThemeChange} checked={darkTheme} />
    </div>
  );
};
