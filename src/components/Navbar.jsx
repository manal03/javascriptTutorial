import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
      <img src={reactLogo} width="40px" alt="logo-for-react" />
      <h1>ReactFacts</h1>
      </nav>
    </header>
  );
}
