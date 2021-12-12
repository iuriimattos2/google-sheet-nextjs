import { useEffect } from "react";

export const selectOptions = [
  {
    category: "Disposable Mask",
    subcategory: ["Polyester", "Fabric", "Other"],
    brands: ["Other"],
  },
  {
    category: "Plastic Bag",
    subcategory: ["Soft Plastic", "Other"],
    brands: ["Other"],
  },

  {
    category: "Cig Butt",
    subcategory: ["Other"],
    brands: ["Other"],
  },
  {
    category: "Cig Package",
    subcategory: ["Cardboard", "Other"],
    brands: ["Other"],
  },
  {
    category: "Styrofoam",
    subcategory: ["Styrofoam", "Other"],
    brands: ["Other"],
  },
  {
    category: "Plastic Bottle",
    subcategory: ["Hard Plastic", "Other"],
    brands: [
      "Mount Franklin",
      "Coke",
      "Pepsi",
      "Sprite",
      "Pump Water",
      "Other",
    ],
  },
  {
    category: "Can",
    subcategory: ["Aluminium"],
    brands: [
      "Coke",
      "Pepsi",
      "Woodstock Bourbon",
      "V Energy Drink",
      "Red Bull",
      "Mother - Energy Drink",
      "Smirnoff",
      "Kirby Lemonade",
      "Sprite",
      "Wild Turkey",
      "Jack Daniel",
      "Other Alcohol",
    ],
  },
  {
    category: "Juice Popper",
    subcategory: ["Cardboard", "Other"],
    brands: ["Up&GO", "Golden Circle", "Other"],
  },
  {
    category: "T/A box",
    subcategory: ["Cardboard", "Other"],
    brands: ["KFC", "McDonald's", "KFC", "Red Rooster", "Other"],
  },
  {
    category: "T/A Cup - Paper",
    subcategory: ["Paper", "Other"],
    brands: [
      "McDonald's",
      "7/11 Coffee",
      "Slurpy",
      "Other Coffee",
      "Juice",
      "Other",
    ],
  },
  {
    category: "T/A Bag - Paper",
    subcategory: ["Paper", "Other"],
    brands: ["KFC", "McDonald's", "Uber", "Other"],
  },
  {
    category: "T/A Wrapper - Paper",
    subcategory: ["Paper", "Other"],
    brands: ["KFC", "McDonald's", "Subway", "Other"],
  },
  {
    category: "Glass Bottle",
    subcategory: ["Glass", "Other"],
    brands: [
      "Smirnoff",
      "Hineken",
      "VB",
      "Asahi",
      "Wine",
      "Bunderburg",
      "Other",
    ],
  },
  {
    category: "Large Bottle",
    subcategory: ["Glass", "Other"],
    brands: ["Wine", "Other"],
  },
  {
    category: "Ziplock",
    subcategory: ["Soft Plastic", "Other"],
    brands: ["Ziplock"],
  },
  {
    category: "Wrapper",
    subcategory: ["Soft Plastic", "Alumunium Foil", "Other"],
    brands: ["Cadbury", "Other"],
  },
];

export const day = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const dateDDMMYYYY = new Date()
  .toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
  })
  .split(", ")[0];

export const timeHHMM = new Date().toLocaleString("en-AU", {
  timeZone: "Australia/Melbourne",
  hour12: false,
  timeStyle: "short",
});

const dayId = new Date().getDay();
export const dayOfWeek = day[dayId];

