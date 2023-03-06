function SectionTitle({ title, content }) {
  return (
    <div className="mx-auto max-w-[570px] space-y-5 text-center">
      <h1 className="text-3xl font-extrabold text-gray-700 dark:text-white md:text-5xl">
        {title}
      </h1>
      <p className="text-base font-medium text-gray-600 dark:text-gray-300  md:text-xl">
        {content}
      </p>
    </div>
  );
}

export default SectionTitle;
