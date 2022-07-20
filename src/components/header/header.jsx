import "./header.css";
import Switch from "react-switch";

export const Header = ({ darkTheme, setDarkTheme }) => {
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
      <Switch
        onChange={() => setDarkTheme(!darkTheme)}
        checked={darkTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={"#242132"}
      />
    </div>
  );
};
