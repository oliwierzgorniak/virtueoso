export default function getNewVirtueObject(id, name) {
  return {
    id: id,
    name: name,
    points: 0,
    history: [],
  };
}
