import { DetailLayout } from "../layout";
import { HeaderButton, DetailMain, DetailSlider } from "../components";
import { useFetchPetById } from "../hooks";
import { useDispatch,useSelector } from "react-redux";
import { addToWishlist,removeFromWishlist } from "../features/wishlist/whishlistSlice";

import arrow from "../assets/images/arrow-left.jpg";
import heart from "../assets/images/heart.jpg";

export const PetDetailForPetOwner = () => {

  const { pet } = useFetchPetById();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.whishlist);
  const isInWishlist = wishList.includes(pet.id);

  const handleWishlistClick = () => {
    if(isInWishlist){
      dispatch(removeFromWishlist(pet.id));
    }else{
      dispatch(addToWishlist(pet.id));
    }
  };

  return (
    <DetailLayout>
      <header className="position-absolute  start-0 end-0 mx-3 d-flex justify-content-between z-1" style={{ marginTop: "44px" }}>
        <HeaderButton to={-1}>
          <img src={arrow} alt="back-button" />
        </HeaderButton>
          <i className={`bi ${isInWishlist ? "bi-heart-fill" : "bi-heart"} fs-4 text-danger pets-wishList`} onClick={handleWishlistClick}></i>
          {console.log(isInWishlist)}
      </header>
      <DetailSlider pet={pet} />
      <DetailMain {...pet} />
    </DetailLayout>
  );
};
