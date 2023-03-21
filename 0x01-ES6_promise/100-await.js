import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils";

async function asyncUploadUser() {
  return {
    photo: await uploadPhoto().catch((error) => {
      return null;
    }),
    user: await createUser().catch((error) => {
      return null;
    }),
  };
}
