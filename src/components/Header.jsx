import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex text-gray-700 align-middle bg-blue-300 navbar bold">
      <div className="flex-1">
        <Link to="/" className="text-xl btn btn-ghost">
          LOGO
        </Link>
      </div>
      <ul className="flex gap-8 mr-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
