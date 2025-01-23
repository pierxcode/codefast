const ButtonLogin2 = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <a href="/dashboard" className="px-4 py-3 text-white rounded-lg bg-primary">
        Welcome back, {name}
      </a>
    );
  }

  return (
    <button className="px-4 py-2 bg-gray-200 rounded">
      Login
    </button>
  );
};

export default ButtonLogin2;