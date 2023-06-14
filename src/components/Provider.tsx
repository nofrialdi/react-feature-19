import { ReactNode, createContext, useState } from "react";
import axios from "axios";

type ContextType = {
  categories: Category[];
  fetchListCategories: () => void;
  //   members: Member[];
} | null;

type Prop = {
  children: ReactNode;
};

type Category = {
  id: string;
  name: string;
  is_active: boolean;
};

type RequestCategory = {
  id?: string;
  name: string;
  is_active: boolean;
};

// type Member = {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   status: string;
// };

export const AppContext = createContext<ContextType>(null);

export const Provider = ({ children }: Prop) => {
  const [categories, setCategories] = useState<Category[]>([]);

  //   const [members, setMembers] = useState<Member[]>([]);

  const fetchListCategories = async () => {
    const headers = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjcyMzQ4NywiZXhwIjoxNjg2NzQ1MDg3fQ.AuGsGCeWl0SU9vA69DNY2YxCdb2kQJBAxHY3_BvAthk",
    };
    const response = await axios.get("https://mock-api.arikmpt.com/api/category?page=1&name=mock category", { headers });

    // const response = await axios.get("https://6422cfe5001cb9fc20307a5e.mockapi.io/members");
    setCategories(response.data?.data);
  };

  const saveCategory = async (data: RequestCategory) => {
    const headers = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY4NjcyMzQ4NywiZXhwIjoxNjg2NzQ1MDg3fQ.AuGsGCeWl0SU9vA69DNY2YxCdb2kQJBAxHY3_BvAthk",
    };
    const response = await axios.post("https://mock-api.arikmpt.com/api/category/create", { name: data.name }, { headers });
    setCategories([...categories, response?.data.data]);
  };

  return <AppContext.Provider value={{ categories, fetchListCategories }}>{children}</AppContext.Provider>;
};
