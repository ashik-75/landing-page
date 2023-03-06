function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="text-gray-600 dark:text-gray-300"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}

function OfferList({ content }) {
  return (
    <div className="mb-3 flex items-center space-x-5">
      <button className="">
        <CheckIcon className="h-3 w-3" />
      </button>
      <span className=" font-medium text-gray-600 dark:text-gray-300  ">
        {content}
      </span>
    </div>
  );
}

export default OfferList;
