// data/menuData.js
const menuData = [
  {
    label: "Categories",
    href: "/",
    children: [
      {
        label: "Phones & Tablets",
        href: "/category",
        children: [
          { label: "Home Audio", href: "/category" },
          { label: "Helicopters & Parts", href: "/category" },
          { label: "Toys & Hobbies", href: "/category" },
          { label: "Outdoor & Traveling", href: "/category" },
          { label: "Garden", href: "/category" },
        ],
      },
      {
        label: "Fashion & Clothing",
        href: "/categories",
      },
      {
        label: "Garden & Kitchen",
        href: "/categories",
      },
    ],
  },
  {
    label: "Templates",
    href: "/",
  },
  {
    label: "Pages",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog/blog-category-grid",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default menuData;
