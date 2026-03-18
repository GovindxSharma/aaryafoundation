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
    name: "Natural Gomay Dhoop Tikki",
    image: "/dhoopbatti.png",
  },
  {
    id: 3,
    name: "Gobar Kande",
    image: "/kande.png",
  },
  {
    id: 4,
    name: "Gobar Diya",
    image: "/dia.png",
  },
  {
    id: 5,
    name: "Surbhi Cup",
    image: "/gobarcup.png",
  },
  {
    id: 6,
    name: "Radiation Chip",
    image: "/radiation.png",
  },
  {
    id: 7,
    name: "Gomay Ganesh Murti",
    image: "/gomay.png",
  }
];

export default products;