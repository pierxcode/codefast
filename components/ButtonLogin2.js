import Link from "next/link";

const ButtonLogin2 = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className={`btn btn-primary text-white rounded-3xl ${extraStyle ? extraStyle : ""}`}>
        Welkom terug, {name}
      </Link>
    );
  }

  return (
    <button className="px-4 py-2 bg-gray-200 rounded">
      Login
    </button>
  );
};

export default ButtonLogin2;