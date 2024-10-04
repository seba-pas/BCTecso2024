import { RegisterShelterForm } from "../RegisterShelter";
import { AuthLayout } from "../layout";

import "../RegisterShelter/style/index.css";

export const RegisterShelter = () => {
  return (
    <AuthLayout>
      <RegisterShelterForm />
    </AuthLayout>
  );
};
