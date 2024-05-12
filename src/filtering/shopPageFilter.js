export const sortOptions = [
  { name: "Best Rating", href: "#", current: true },
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
  {
    id: crypto.randomUUID(),
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
