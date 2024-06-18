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
const barGroup = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", (d, i) => `translate(0, ${i * (barHeight + margin)})`);

        barGroup.append("rect")
        .attr("class", "bar")
        .attr("width", 0)  // Start width for transition
        .attr("height", barHeight)
        .transition()
        .duration(1000)
        .attr("width", d => xScale(d));

// Appending text labels
bar.append("text")
.attr("class", "label")
.attr("x", d => xScale(d) + 5)  // Position near the end of the bar
.attr("y", barHeight / 2)
.attr("dy", "0.35em")
.attr("text-anchor", "end")
.text(d => d); 

// Added hover effect
bar.on("mouseover", function() {
    d3.select(this).select("rect").attr("class", "bar hover");
}).on("mouseout", function() {
    d3.select(this).select("rect").attr("class", "bar");
});