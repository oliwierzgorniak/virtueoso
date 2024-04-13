export default function getId() {
  const virtuesJson = window.localStorage.getItem("virtues");
  if (!virtuesJson) return 0;
  const virtues = JSON.parse(virtuesJson);
  return virtues.length;
}
