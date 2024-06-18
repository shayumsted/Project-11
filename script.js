// U78784426
// Data
const data = [100, 420, 230, 850, 560, 925];

// Defining Dimensions
const width = 500;
const barHeight = 20;
const margin = 1;
const height = data.length * (barHeight + margin);

// Scaling lines
const xScale = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([50, width]);

// Creating SVG Container