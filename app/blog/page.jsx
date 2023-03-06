import { BlogList } from "@/components/Blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";

function page() {
  return (
    <div className="py-24 md:py-20 lg:py-28">
      <Breadcrumbs
        title={"Blog Grid"}
        content="        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium dolores commodi, voluptatem ipsum accusamus"
      />

      <div className="container mx-auto py-16 px-5 md:py-20 lg:py-28">
        <BlogList />
      </div>

      <Pagination />
    </div>
  );
}

export default page;
