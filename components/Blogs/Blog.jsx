import Image from "next/image";

function Blog(props) {
  const { title, category, author, image, content } = props;
  return (
    <div className="cursor-pointer space-y-3 overflow-hidden rounded-lg shadow-lg dark:bg-blue-700/10 ">
      <div className="relative h-60">
        <Image
          src={image}
          fill
          className="object-cover object-center"
          alt={title}
        />

        <span className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium capitalize text-white">
          {category}
        </span>
      </div>

      <div className="space-y-5 p-5 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
          {title}
        </h2>
        <p className="text-md border-b-[.5px] border-b-zinc-300 pb-5 text-gray-600 dark:border-b-zinc-600 dark:text-gray-300">
          {content}
        </p>

        <div className="flex items-center space-x-4">
          <div>
            <Image
              src={author.image}
              width={50}
              height={50}
              alt="author image"
            />
          </div>

          <div className="flex divide-x-[.5px] divide-zinc-300 dark:divide-zinc-600">
            <div className="mr-5">
              <h4 className="text-lg font-bold text-gray-700 dark:text-white">
                {author.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {author.position}
              </p>
            </div>

            <div className="space-y-1 pl-5">
              <p className="font-medium">Date</p>
              <h6 className="text-sm text-gray-500 dark:text-gray-300 ">
                {author.year}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
