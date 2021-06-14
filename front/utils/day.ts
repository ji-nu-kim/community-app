export function day() {
  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}T${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;

  return today;
}

export function fromMomentToDate(momentDate: string) {
  const d = momentDate.split(' ');
  const year = d[0].slice(0, 4);
  const month = d[1].length === 2 ? `0${d[1][0]}` : d[1].slice(0, 2);
  const date = d[2].length === 2 ? `0${d[2][0]}` : d[2].slice(0, 2);
  const d2 = d[4].split(':');
  const hour = d[3] === '오후' ? +d2[0] + 12 : d2[0];
  const minute = d2[1].length === 1 ? `0${d2[1][0]}` : d2[1];
  return `${year}-${month}-${date}T${hour}:${minute}`;
}
