// import { signUpUser } from "./4-user-promise";
// import { uploadPhoto } from "./5-photo-reject";

// export function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//     .then((result) => {
//       return result.map((res) => {
//         [
//           {
//             status: res.status,
//             value: res.status === "fulfilled" ? res.value : res.reason,
//           },
//         ];
//       });
//     })
//     .catch(new Error("Unable to resolve."));
// }
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
