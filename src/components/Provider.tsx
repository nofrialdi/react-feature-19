import { ReactNode, createContext, useState } from "react";
import axios from "axios";

type ContextType = {
  categories: Category[];
  fetchListCategories: () => void;
} | null;

type Prop = {
  children: ReactNode;
};

type Category = {
  id: string;
  name: string;
  is_active: boolean;
};

export const AppContext = createContext<ContextType>(null);

export const Provider = ({ children }: Prop) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchListCategories = async () => {
    const headers = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4Njc1Mzk4MCwiZXhwIjoxNjg2Nzc1NTgwfQ.EHhI4wqFn-aywPQRCqUoc3OsqPy4R7I0p4E01ONxJAQ",
    };
    const response = await axios.get("https://mock-api.arikmpt.com/api/category?page=1&name=mock category", { headers });

    // setCategories(response.data?.data);
    console.log(response.data?.data);
  };

  return <AppContext.Provider value={{ categories, fetchListCategories }}>{children}</AppContext.Provider>;
};
