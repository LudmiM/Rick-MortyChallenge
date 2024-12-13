import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="bg-[#043c6e] p-4">
      <div >
        <Link to={"/"}>
          <img
            src="/rick.png"
            alt="Logo"
            className="max-w-[50px] h-auto"
          />
        </Link>
      </div>
    </header>
  );
}
