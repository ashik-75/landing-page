const pages = ["Prev", 1, 2, 3, 4, "...", 10, 11, 13, "Next"];
function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1">
      {pages.map((page) => (
        <button
          disabled={page === "..."}
          key={page}
          className={`rounded bg-zinc-200 px-3 py-2 text-body-color hover:bg-purple-600 hover:text-white disabled:hover:bg-gray-500 dark:bg-blue-600/30 dark:hover:bg-purple-500 disabled:dark:hover:bg-gray-500  ${
            page === "..." && "cursor-not-allowed"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
