import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../api/setupAxios";

export const useFetchPetById = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const resp = await getPetById(id);
      setPet(resp);
    })();
  }, [id]);

  return {
    pet,
  };
};
