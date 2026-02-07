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
      image: "/image.png",
    },
    {
      id: 2,
      name: "Organic Dhoop",
      price: 250,
      image: "/image.png",
    },
    {
        id: 3,
        name: "Cow Dung Cake",
        price: 250,
        image: "/image.png",
      },
  ];
  
  export default products;
  