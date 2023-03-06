import SectionTitle from "../Common";
import Feature from "./Feature";
import { features } from "./features";

function Features() {
  return (
    <div className=" bg-blue-50/50  px-5 py-16 dark:bg-transparent md:py-20">
      <div className="container mx-auto">
        <SectionTitle
          title={"Main Features"}
          content="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />

        {/* show the features list */}
        <div className="my-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
