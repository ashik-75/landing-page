import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";

function page() {
  return (
    <div className="py-24 md:py-20 lg:py-28">
      <Breadcrumbs
        title={"Contact Page"}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum distinctio cum impedit delectus mollitia excepturi."
      />

      <Contact />
    </div>
  );
}

export default page;
