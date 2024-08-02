export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-black ml-2 bg-transparent border  font-medium rounded-lg text-sm px-4 py-2 text-center border-black dark:border-green200 dark:text-white"
    >
      {text}
    </button>
  );
}
