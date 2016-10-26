

window.onload = function alchemy(){
    var width = 1000,
    height = 700,
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
    
svg.append("g").selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 60)
        .attr("height", 60)
        .attr("y", function(d, i){ return i*70;})
        .attr("fill", function(d){ return d.color;})
        .on("click", onElementClick);

svg.append("g").selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", 780)
        .attr("y", function(d, i){ return i*70;})
        .attr("fill", function(d){ return d.color;})
        .on("click", onRightElementClick);

svg       
        .append("g")
        .append("rect")
        .attr("width", 700)
        .attr("height", 300)
        .attr("x", 70)
        .attr("fill", "gray");

svg       
        .append("g")
        .append("rect")
        .attr("width", 700)
        .attr("height", 50)
        .attr("x", 70)
        .attr("y", 310)
        .attr("fill", "yellow");

function onElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 100)
            .attr("y", 110)
            .attr("fill", function(){ return d.color;})
}

function onRightElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 680)
            .attr("y", 110)
            .attr("fill", function(){ return d.color;})
}

}

