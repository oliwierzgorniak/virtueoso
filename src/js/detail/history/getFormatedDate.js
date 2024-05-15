export default function getFormatedDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const dayWithZero = String(day).length == 1 ? "0" + day : day;
  const month = date.getMonth();
  const monthWithZero = String(month).length == 1 ? "0" + month : month;

  return `${dayWithZero}.${monthWithZero}`;
}
