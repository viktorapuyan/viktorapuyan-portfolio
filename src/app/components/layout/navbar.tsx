export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between">
      <h1 className="font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}