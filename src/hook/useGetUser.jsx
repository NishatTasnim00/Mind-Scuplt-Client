import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()

  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState("");
  // console.log(role)

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    enabled: !loading ,
    queryFn: async () => {
      try {
        if (!user) {
          return [];
        }
        const result = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/${user.email}`
        );
        setRole(result?.data?.role);
        return result.data;
      } catch (error) {
        // Handle errors, you may want to navigate to an error page or log the error
        console.error("Error fetching user data:", error);
        // Optionally navigate to an error page
        // navigate('/error');
        return [];
      }
    },
  });

  return { role, userData, refetch };
};

export default useGetUser;
