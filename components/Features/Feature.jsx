function Feature({ title, icon: Icon, content }) {
  return (
    <div className="space-y-6  text-left">
      <button className="inline-block rounded-lg bg-gray-200/70 p-3 dark:bg-blue-100/10">
        <Icon class="h-8 w-8 " />
      </button>

      <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
        {title}
      </h2>
      <p className="  text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}

export default Feature;
