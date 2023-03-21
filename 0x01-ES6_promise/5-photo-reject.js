export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    resolve(fileName);

    reject(new Error(`${fileName} cannot be processed`));
  });
}
