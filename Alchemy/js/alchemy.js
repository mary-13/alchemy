

window.onload = function alchemy(){
    var width = 1000;
    var height = 700;
    var cellSize = 17; // cell size
    var offsetX = 10;
    var offsetY = 10;



var elements = [
    {name: "water", color: "#87CEFA"}, 
    {name: "fire", color: " #FF4500"},
    {name: "air", color: "#F8F8FF"}, 
    {name: "earth", color: "#CD853F"}];

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
    
svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#000000");
    
svg.append("g").selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", offsetX)
        .attr("y", function(d, i){ return i*70 + offsetY;})
        .attr("fill", function(d){ return d.color;})
        .on("click", onElementClick);

svg.append("g").selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", 780 + offsetX)
        .attr("y", function(d, i){ return i*70 + offsetY;})
        .attr("fill", function(d){ return d.color;})
        .on("click", onRightElementClick);

svg       
        .append("g")
        .append("rect")
        .attr("width", 700)
        .attr("height", 300)
        .attr("x", 70 + offsetX)
        .attr("fill", "#FFFFE0");

svg       
        .append("g")
        .append("rect")
        .attr("width", 700)
        .attr("height", 50)
        .attr("x", 70 + offsetX)
        .attr("y", 310 + offsetY)
        .attr("fill", "#DAA520");

function onElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 100 + offsetX)
            .attr("y", 110 + offsetY)
            .attr("fill", function(){ return d.color;})
}

function onRightElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 680 + offsetX)
            .attr("y", 110 + offsetY)
            .attr("fill", function(){ return d.color;})
}

}

