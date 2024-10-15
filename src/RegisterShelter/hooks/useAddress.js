import { useEffect, useState } from "react";
import { getCities, getProvinces } from "../../api/setupAxios";

export const useAddress = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState("");
  const [cities, setCities] = useState([]);

  const handleProvinces = async () => {
    const response = await getProvinces();
    setProvinces(response);
  };
  const handleCities = async () => {
    if (!selectedProvinces) return setCities([]);

    const response = await getCities(selectedProvinces);
    setCities(response);
  };

  useEffect(() => {
    handleProvinces();
  }, []);

  useEffect(() => {
    handleCities();
  }, [selectedProvinces]);

  return {
    provinces,
    cities,
    setSelectedProvinces,
  };
};
