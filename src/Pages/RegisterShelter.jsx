import { RegisterShelterForm } from "../RegisterShelter";
import { AuthLayout } from "../layout";

import "../RegisterShelter/style/index.css";

function RegisterShelter() {
  return (
    <AuthLayout>
      <RegisterShelterForm />
    </AuthLayout>
  );
};

export default RegisterShelter;