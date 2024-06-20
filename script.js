// U78784426
document.addEventListener('DOMContentLoaded', () => {
    const data = [100, 420, 230, 850, 560, 925];
    const width = 500;
    const barHeight = 20;
    const margin = 1;
    const height = (barHeight + margin) * data.length;

    const svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([50, width]);

    const bar = svg.selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(0, ${i * (barHeight + margin)})`);

    bar.append('rect')
        .attr('class', 'bar')
        .attr('width', 0)  // Start with 0 width for transition effect
        .attr('height', barHeight)
        .transition()
        .duration(800)
        .attr('width', d => xScale(d));

    bar.append('text')
        .attr('class', 'label')
        .attr('x', d => xScale(d) - 5)
        .attr('y', barHeight / 2)
        .attr('dy', '.35em')
        .text(d => d);
});
