import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      [photo, user] = result;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}
