window.onload = function alchemy(){
    var width = 960,
    height = 260,
    cellSize = 17; // cell size

var elements = [
    {name: "water", color: "blue"}, 
    {name: "fire", color: "red"},
    {name: "air", color: "white"}, 
    {name: "earth", color: "brown"}];

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
    
svg.selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 40)
        .attr("height", 40)
        .attr("y", function(d, i){ return i*50;})
        .attr("fill", function(d){ return d.color;});

svg       
        .append("g")
        .append("rect")
        .attr("width", 900)
        .attr("height", 190)
        .attr("x", 50)
        .attr("fill", "gray");

svg       
        .append("g")
        .append("rect")
        .attr("width", 960)
        .attr("height", 50)
        .attr("y", 200)
        .attr("fill", "yellow");
}

