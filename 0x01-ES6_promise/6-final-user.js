import { signUpUser } from "./4-user-promise";
import { uploadPhoto } from "./5-photo-reject";

export function handleProfileSignup(firstName, lastName, fileName) {
  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      result.map((res) => {
        [
          {
            status: res.status,
            value: res.status === "fulfilled" ? res.value : res.reason,
          },
        ];
      });
    })
    .catch(new Error("Unable to resolve."));
}
