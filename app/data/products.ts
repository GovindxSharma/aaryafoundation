export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Pure A2 Ghee",
      price: 1200,
      image: "/A2Ghee.png",
    },
    {
      id: 2,
      name: "Organic Dhoop",
      price: 250,
      image: "/cowdhoop.png",
    },
    {
        id: 3,
        name: "Cow Shampoo",
        price: 250,
        image: "/GauShampoo.png",
      },
  ];
  
  export default products;
  