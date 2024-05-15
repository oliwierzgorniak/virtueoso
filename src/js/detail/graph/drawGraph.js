export default function draOwGraph(canvas, virtue) {
  const RECORDS_DISPLAYED = 5;
  const nRecords = virtue.history.length;
  const records = virtue.history.slice(nRecords - RECORDS_DISPLAYED);

  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, canvas.height * 0.5);
  let y = canvas.height * 0.5;
  records.forEach((record, i) => {
    console.log(record.rating);
    y -= record.rating * 2.5;
    ctx.lineTo((canvas.width / RECORDS_DISPLAYED + 1) * (i + 1), y);
  });
  ctx.stroke();
}
