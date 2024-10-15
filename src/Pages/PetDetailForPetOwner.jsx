import { DetailLayout } from "../layout";
import { HeaderButton, DetailMain } from "../components";
import { useFetchPetById } from "../hooks";

import arrow from "../assets/images/arrow-left.jpg";
import heart from "../assets/images/heart.jpg";

export const PetDetailForPetOwner = () => {
  const { pet } = useFetchPetById();

  return (
    <DetailLayout>
      <header className="position-absolute  start-0 end-0 mx-3 d-flex justify-content-between" style={{ marginTop: "44px" }}>
        <HeaderButton to={-1}>
          <img src={arrow} alt="back-button" />
        </HeaderButton>
        <HeaderButton to="heart">
          <img src={heart} alt="back-button" />
        </HeaderButton>
      </header>
      {pet.fotos && pet.fotos.map((image, index) => <img key={image} src={image} alt={`pet-image-${index}`} className="w-100 object-fit-cover" height="400px" />)}
      <DetailMain {...pet} />
    </DetailLayout>
  );
};
