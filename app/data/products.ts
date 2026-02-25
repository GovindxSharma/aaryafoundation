export interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pure A2 Ghee",
    image: "/A2Ghee.png",
  },
  {
    id: 2,
    name: "Organic Dhoop Patti",
    image: "/dhoopbatti.png",
  },
  {
    id: 3,
    name: "Cow Shampoo",
    image: "/GauShampoo.png",
  },
  {
    id: 4,
    name: "Gobar Kande",
    image: "/kande.png",
  },
  {
    id: 5,
    name: "Gobar Diya",
    image: "/dia.png",
  },
  {
    id: 6,
    name: "Gobar Cup",
    image: "/gobarcup.png",
  },
];

export default products;