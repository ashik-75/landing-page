import SectionTitle from "../Common";
import Blog from "./Blog";

const blogs = [
  {
    id: 1,
    image: "/blogs/blog-1.jpg",
    title: "Best Ui component for modern websites",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    category: "programming",
    author: {
      name: "Jones",
      image: "/blogs/auth-01.png",
      position: "Graphic Designer",
      year: "2021",
    },
  },
  {
    id: 2,
    image: "/blogs/blog-2.jpg",
    title: "Best Ui component for modern websites",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    category: "programming",
    author: {
      name: "Jones",
      image: "/blogs/auth-02.png",
      position: "Graphic Designer",
      year: "2021",
    },
  },
  {
    id: 3,
    image: "/blogs/blog-3.jpg",
    title: "Best Ui component for modern websites",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    category: "programming",
    author: {
      name: "Jones",
      image: "/blogs/auth-03.png",
      position: "Graphic Designer",
      year: "2021",
    },
  },
];

export function BlogList() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  );
}

function Blogs() {
  return (
    <div className="bg-blue-50/50  px-5 py-16 dark:bg-transparent md:py-20">
      <div className="container mx-auto space-y-10">
        <SectionTitle
          title={"Our Latest Blogs"}
          content={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
        />

        <BlogList />
      </div>
    </div>
  );
}

export default Blogs;
