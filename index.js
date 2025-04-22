const dscc = require('@google/dscc');

function drawViz(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";

  const rows = data.tables.DEFAULT;

  rows.forEach(row => {
    const label = row.dimensions[0];
    const actual = row.metrics[0];
    const target = row.metrics[1];

    const percentage = Math.min((actual / target) * 100, 100).toFixed(1);

    const chart = `
      <div class="row">
        <div class="label">${label}</div>
        <div class="bar-container">
          <div class="target-bar"></div>
          <div class="actual-bar" style="width:${percentage}%"></div>
        </div>
        <div class="percentage">${actual} / ${target}</div>
      </div>
    `;

    container.innerHTML += chart;
  });
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });

