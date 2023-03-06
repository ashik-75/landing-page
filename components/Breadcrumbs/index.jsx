import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Breadcrumbs({ title, content }) {
  return (
    <div className="px-5">
      <div className="container mx-auto flex flex-col items-start justify-between gap-5 md:flex-row md:items-end ">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="max-w-xl text-body-color">{content}</p>
        </div>

        <div>
          <ul className="flex items-center space-x-4 text-body-color">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <ChevronRightIcon className="icon" />
            </li>

            <li className="font-medium text-purple-800">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
