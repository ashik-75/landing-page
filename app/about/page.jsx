import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumbs from "@/components/Breadcrumbs";

function About() {
  return (
    <div className="py-24 lg:py-28">
      <Breadcrumbs
        title={"About Page"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
}

export default About;
