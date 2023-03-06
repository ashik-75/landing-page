import Image from "next/image";

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="5"
    stroke="currentColor"
    className="h-3 w-3 text-purple-800"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

function List({ text }) {
  return (
    <p className="mb-3 flex items-center space-x-3">
      <button className="rounded bg-purple-600/10 p-1 shadow">
        {/* <CheckIcon className="icon [&>path]:stroke-[10]" /> */}
        {Icon}
      </button>
      <p>{text}</p>
    </p>
  );
}

function AboutSectionTwo() {
  return (
    <section id="about" className="px-5 py-16 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative h-full">
            <Image
              src="/projection.svg"
              className="object-contain object-center"
              alt=""
              fill
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-extrabold text-gray-700 dark:text-white md:text-5xl">
              Crafted for Startup, SaaS and Business Sites.
            </h1>
            <h5 className="text-gray-600 dark:text-gray-300 ">
              The main ‘thrust’ is to focus on educating attendees on how to
              best protect highly vulnerable business applications with
              interactive panel discussions and roundtables.
            </h5>

            <div className="grid grid-cols-1 text-gray-600 dark:text-gray-300 md:grid-cols-2">
              <div>
                <List text="Premium quality" />
                <List text="Tailwind CSS" />
                <List text="Use for lifetime" />
              </div>
              <div>
                <List text="Premium quality" />
                <List text="Tailwind CSS" />
                <List text="Use for lifetime" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionTwo;
