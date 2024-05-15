export default function getNewVirtueObject(id, name) {
  return {
    id: id,
    name: name,
    points: 0,
    history: [
      { dateStr: "2024-04-14T11:45:07.427Z", rating: -5 },
      { dateStr: "2024-04-14T11:45:07.427Z", rating: -10 },
      { dateStr: "2024-04-14T11:45:07.427Z", rating: -5 },
      { dateStr: "2024-04-14T11:45:07.427Z", rating: -10 },
      { dateStr: "2024-04-14T11:45:07.427Z", rating: -5 },
    ],
  };
}
