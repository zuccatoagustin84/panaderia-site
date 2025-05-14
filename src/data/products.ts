import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Pan Artesanal",
    description: "Pan rústico elaborado con masa madre y horneado en horno de piedra. Corteza crujiente y miga suave.",
    price: 5.99,
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "panes",
    featured: true,
    ingredients: ["Harina de trigo", "Agua", "Sal", "Masa madre"],
    allergens: ["Gluten"],
    nutritionalInfo: {
      calories: 250,
      protein: 8,
      carbs: 48,
      fat: 2
    }
  },
  {
    id: 2,
    name: "Croissant Clásico",
    description: "Croissant tradicional francés elaborado con mantequilla de primera calidad y una fermentación lenta.",
    price: 3.49,
    image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "bollería",
    featured: true,
    ingredients: ["Harina", "Mantequilla", "Azúcar", "Levadura", "Huevo"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    nutritionalInfo: {
      calories: 310,
      protein: 5,
      carbs: 35,
      fat: 18
    }
  },
  {
    id: 3,
    name: "Tarta de Chocolate",
    description: "Deliciosa tarta con base de chocolate belga y ganache de chocolate negro. Decorada con virutas de chocolate.",
    price: 24.99,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "pasteles",
    featured: true,
    ingredients: ["Chocolate", "Harina", "Azúcar", "Mantequilla", "Huevos"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    nutritionalInfo: {
      calories: 420,
      protein: 6,
      carbs: 45,
      fat: 22
    }
  },
  {
    id: 4,
    name: "Baguette Tradicional",
    description: "Auténtica baguette francesa con una corteza dorada y crujiente y una miga ligera y aireada.",
    price: 2.99,
    image: "https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "panes",
    ingredients: ["Harina de trigo", "Agua", "Sal", "Levadura"],
    allergens: ["Gluten"],
    nutritionalInfo: {
      calories: 270,
      protein: 9,
      carbs: 52,
      fat: 1
    }
  },
  {
    id: 5,
    name: "Pan de Centeno",
    description: "Pan denso y nutritivo elaborado con harina de centeno. Perfecto para acompañar quesos y embutidos.",
    price: 4.99,
    image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "panes",
    ingredients: ["Harina de centeno", "Harina de trigo", "Agua", "Sal", "Masa madre"],
    allergens: ["Gluten"],
    nutritionalInfo: {
      calories: 230,
      protein: 6,
      carbs: 45,
      fat: 1
    }
  },
  {
    id: 6,
    name: "Pain au Chocolat",
    description: "Delicioso hojaldre relleno de chocolate negro de alta calidad. El equilibrio perfecto entre mantequilla y chocolate.",
    price: 3.79,
    image: "https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "bollería",
    ingredients: ["Harina", "Mantequilla", "Chocolate", "Azúcar", "Levadura"],
    allergens: ["Gluten", "Lácteos"],
    nutritionalInfo: {
      calories: 350,
      protein: 5,
      carbs: 40,
      fat: 19
    }
  },
  {
    id: 7,
    name: "Cheesecake de Frutos Rojos",
    description: "Cremoso cheesecake con base de galleta y cobertura de frutos rojos frescos de temporada.",
    price: 22.99,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "pasteles",
    featured: true,
    ingredients: ["Queso crema", "Azúcar", "Huevos", "Galletas", "Mantequilla", "Frutos rojos"],
    allergens: ["Lácteos", "Gluten", "Huevo"],
    nutritionalInfo: {
      calories: 380,
      protein: 7,
      carbs: 30,
      fat: 25
    }
  },
  {
    id: 8,
    name: "Cookies con Trozos de Chocolate",
    description: "Galletas caseras con grandes trozos de chocolate negro. Textura crujiente por fuera y suave por dentro.",
    price: 1.99,
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "dulces",
    ingredients: ["Harina", "Mantequilla", "Azúcar", "Huevo", "Chocolate"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    nutritionalInfo: {
      calories: 220,
      protein: 3,
      carbs: 28,
      fat: 12
    }
  }
];

export const categories = [
  { id: "panes", name: "Panes" },
  { id: "bollería", name: "Bollería" },
  { id: "pasteles", name: "Pasteles" },
  { id: "dulces", name: "Dulces" }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}