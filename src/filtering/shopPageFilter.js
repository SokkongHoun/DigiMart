export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
export const subCategories = [
  { name: "Watch Straps", href: "#" },
  { name: "Stands", href: "#" },
  { name: "Phone Card Holders", href: "#" },
  { name: "Mouse Pads", href: "#" },
  { name: "Laptop bags", href: "#" },
  { name: "Cases", href: "#" },
];
export const filters = [
  /* to create new filters, copy below object, using same structure */
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black", checked: false },
      { value: "white", label: "White", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "red", label: "Red", checked: false },
      { value: "yellow", label: "Yellow", checked: false },
      { value: "gray", label: "Gray", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "pink", label: "Pink", checked: false },
    ],
  },
];
