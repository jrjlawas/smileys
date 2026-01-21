import img1 from "../assets/images/thumb/featured-1.png";
import pImg1 from "../assets/images/thumb/popular-1.png";
import tagImg from "../assets/images/victor/populer.png";

export interface food {
  id: number;
  title: string;
  img: string;
  categoryName: String;
  isPopular: string;
  items: string[];
  reviews: string;
  price: number;
  offer: string;
  tags?: string;
}

export interface popularFood {
  id: number;
  title: string;
  img: string;
  items: string[];
  reviews: string;
  price: number;
}

export interface foodCategory {
  id: number;
  categoryName: string;
  tags1: string;
}

export const foods: food[] = [
  {
    id: 1,
    title: "Two Eggs Any Style",
    img: img1,
    categoryName: "Breakfast Beginnnings",
    isPopular: "Y",
    items: ["Serve with Toast & Hash Browns"],
    reviews: "5.0",
    price: 11.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 2,
    title: "Bacon, Ham, or Sausage & Eggs",
    img: img1,
    categoryName: "Breakfast Beginnnings",
    isPopular: "Y",
    items: ["Serve with Eggs, Toast & Hash Browns"],
    reviews: "5.0",
    price: 14.95,
    offer: "",
    tags: tagImg,
  },
];

export const popularFoods: popularFood[] = [
  {
    id: 1,
    title: "Quinoa-Stuffed Bell Pepper",
    img: pImg1,
    items: ["4 Piece Chicken", "Spicy Sauce", "Sample Text"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
];
