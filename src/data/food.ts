import bfmenu1 from "../assets/images/smiley/menus/breakfast/menu1.svg";
import bfmenu2 from "../assets/images/smiley/menus/breakfast/menu2.svg";
import bfmenu3 from "../assets/images/smiley/menus/breakfast/menu3.svg";
import bfmenu4 from "../assets/images/smiley/menus/breakfast/menu4.svg";
import bfmenu5 from "../assets/images/smiley/menus/breakfast/menu5.svg";
import bfmenu6 from "../assets/images/smiley/menus/breakfast/menu6.svg";
import bfmenu7 from "../assets/images/smiley/menus/breakfast/menu7.svg";
import img1 from "../assets/images/smiley/menus/default.svg";

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
    img: bfmenu1,
    categoryName: "Breakfast Beginnings",
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
    img: bfmenu2,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["Serve with Eggs, Toast & Hash Browns"],
    reviews: "5.0",
    price: 14.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 3,
    title: "Steak & Eggs",
    img: bfmenu3,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["8o.z Top Sirloin with Two Eggs any Style", "Toast & Hash Browns"],
    reviews: "5.0",
    price: 28.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 4,
    title: "Back Bacon & Eggs",
    img: bfmenu4,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["Back Bacon with Two Eggs any Style", "Toast & Hash Browns"],
    reviews: "5.0",
    price: 16.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 5,
    title: "Hotcakes",
    img: bfmenu5,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["3 Traditional Buttermilk Pancakes", "Butter & Maple Syrup"],
    reviews: "5.0",
    price: 12.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 6,
    title: "Hotcakes & Eggs",
    img: bfmenu6,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["3 Traditional Buttermilk Pancakes", "Eggs any Style"],
    reviews: "5.0",
    price: 16.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 7,
    title: "French Toast",
    img: bfmenu7,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: [
      "3 Slices of grilled French Bread with Egg",
      "Butter & Maple Syrup",
    ],
    reviews: "5.0",
    price: 14.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 8,
    title: "Plain Omelet",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["Toast & Hash Brown"],
    reviews: "5.0",
    price: 14.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 9,
    title: "Make Your Own Omelet",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: [
      "3 Eggs Blended with Toppings of your Choice: Ham, Mushroom, Cheese, Pepper, Onions",
      "2.00 For Each Toppings",
    ],
    reviews: "5.0",
    price: 12.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 10,
    title: "Western Omelet",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: [
      "3 Eggs Blended with Diced Ham, Green Pepper, Onions, Cheese and Mushrooms",
      "Toast & Hash Browns",
    ],
    reviews: "5.0",
    price: 17.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 11,
    title: "Trans-Canada Trucker Special",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["Bacon & Sausage with Three Eggs any Style", "Toast & Hash Browns"],
    reviews: "5.0",
    price: 17.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 12,
    title: "Eggs Benedict",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: [
      "2 Eggs on English Muffins topped with premium back Bacon, Smothered in Creamy Hollandaise Sauce",
      "Hash Browns",
    ],
    reviews: "5.0",
    price: 16.95,
    offer: "",
    tags: tagImg,
  },
  {
    id: 13,
    title: "One Egg Any Style",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["1 Egg Any Style", "Toast & Hash Browns"],
    reviews: "5.0",
    price: 8.5,
    offer: "",
    tags: tagImg,
  },
  {
    id: 14,
    title: "Flying Saucers",
    img: img1,
    categoryName: "Breakfast Beginnings",
    isPopular: "N",
    items: ["2 Buttermilk Pancakes", "Butter & Maple Syrup"],
    reviews: "5.0",
    price: 10.0,
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
