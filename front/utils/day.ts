export default function day() {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}T${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;

  return today;
}
