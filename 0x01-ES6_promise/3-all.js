import { uploadPhoto, createUser } from "./utils";

export function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      [photo, user] = result;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
