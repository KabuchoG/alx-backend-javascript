import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils";

export async function asyncUploadUser() {
  return {
    photo: await uploadPhoto().catch(() => {
      return null;
    }),
    user: await createUser().catch(() => {
      return null;
    }),
  };
}
