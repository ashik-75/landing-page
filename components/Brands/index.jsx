import Image from "next/image";

const brandsData = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://plainadmin.com",
    image: "/brands/tailadmin.svg",
  },
];

const Brand = ({ name, href, image }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        <Image
          width={160}
          height={80}
          src={image}
          alt={name}
          className="opacity-50"
        />
      </a>
    </div>
  );
};

function Brands() {
  return (
    <div className="px-5 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto rounded-xl bg-slate-900 py-16 md:rounded-xl md:px-20">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {brandsData.map((brand) => (
            <Brand key={brand.id} {...brand} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
