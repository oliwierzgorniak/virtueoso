export default function getNewVirtueObject(id, name) {
  return {
    id: id,
    name: name,
    virtuePoints: 0,
    history: [],
  };
}
