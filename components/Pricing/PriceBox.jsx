function PriceBox(props) {
  const { children, duration, subtitle, packagename, price } = props;
  return (
    <div className="space-y-4 rounded-lg p-5 shadow dark:bg-blue-600/20 md:p-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-extrabold text-gray-600 dark:text-white">
          ${price}
          <span className="lowercase text-body-color">/{duration}</span>
        </h2>

        <p className="text-lg font-medium">{packagename}</p>
      </div>

      <p className="text-lg">{subtitle}</p>

      <div className="mb-10 block border-b border-b-slate-500 pb-5">
        <button className="w-full rounded bg-purple-700 py-2 px-4 font-semibold text-white hover:bg-purple-600">
          Start Free Trial
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default PriceBox;
