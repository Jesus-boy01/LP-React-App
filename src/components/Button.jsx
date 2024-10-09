const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="border-2 border-black bg-black text-white italic py-1 px-4 mb-4 font-thin text-sm"
    >
      {title}
    </button>
  );
};

export default Button;
