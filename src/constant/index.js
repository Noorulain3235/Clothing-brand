export const colorClassMap = {
  black: "bg-black",
  red: "bg-red-500",
  green: "bg-green-500",
  white: "bg-white",
};





export const products = [
  {
    name: "Timeless Classic Collection",
    category: "Work & Office",
    price: 124.9,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "black",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-black-300x366.jpg`,
      },
      {
        name: "red",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-red-300x366.jpg`,
      },
      {
        name: "green",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-green-300x366.jpg`,
      },
      {
        name: "white",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-08-a-400x488.jpg`,
      },
    ],
  },
  {
    name: "Bohemain Rhapsody Attire",
    category: "Casual",
    price: 145.5,
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "black",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-black-300x366.jpg`,
      },
      {
        name: "green",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-green-300x366.jpg`,
      },
      {
        name: "red",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-06-a-red-300x366.jpg`,
      },
    ],
  },
  {
    name: "Midnight Gala Maxi Dress",
    category: "Evening Dresses",
    price: 175.0,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "white",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-white-300x366.jpg`,
      },
      {
        name: "red",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-red-300x366.jpg`,
      },
      {
        name: "black",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-black-300x366.jpg`,
      },
      {
        name: "green",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-05-a-green-300x366.jpg`,
      },
    ],
  },
  {
    name: "Power Suit Ensemble",
    category: "Casual",
    price: 125.5,
    sizes: ["M", "L", "XL"],
    colors: [
      {
        name: "white",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-400x488.jpg`,
      },
      {
        name: "black",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-black-300x366.jpg`,
      },
      {
        name: "green",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-green-300x366.jpg`,
      },
      {
        name: "red",
        imageUrl: `${process.env.PUBLIC_URL}/images/img-01-a-red-300x366.jpg`,
      },
    ],
  },
];





// Additional products for the second component
export  const products2 = [
    {
      name: "Professional Pinstripe Blazer",
      category: " Activewear",
      price: 124.9,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-02-a-600x731.jpg`,
    },
    {
      name: "Relaxed Fit Joggers",
      category: "Work & Office",
      price: 89.5,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-07-a-600x731.jpg`,
    },
    {
      name: "Urban Chic Ensemble",
      category: "Evening Dresses",
      price: 110.0,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-04-a-600x731.jpg`,
    },
    {
      name: "Weekend Wenderlust Wardrobe",
      category: "Activewear",
      price: 149.99,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-03-a-600x731.jpg`,
    },
  ];