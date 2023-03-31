export default function getListStudentIds(objectsArray) {
  const ids = objectsArray.map((x) => x.id);
  return ids;
}
