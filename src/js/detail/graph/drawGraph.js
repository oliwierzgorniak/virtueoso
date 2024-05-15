export default function drawGraph(canvas, virtue) {
  const RECORDS_DISPLAYED = 5;
  const nRecords = virtue.history.length;
  const records = virtue.history.slice(nRecords - RECORDS_DISPLAYED);

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height * 0.5);
  let y = canvas.height * 0.5;
  console.log("refresh");
  records.forEach((record, i) => {
    y -= record.rating * 2;
    ctx.lineTo((canvas.width / RECORDS_DISPLAYED) * (i + 1), y);
  });
  ctx.stroke();
}
