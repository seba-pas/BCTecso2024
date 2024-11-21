import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../api/setupAxios";

export const useFetchPetByIdForShelter = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const resp = await getPetById(id);
      const { contacto, ...rest } = resp;
      setPet(rest);
    })();
  }, [id]);

  return {
    pet,
  };
};
