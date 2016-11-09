

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
    {name: "earth", color: "#CD853F"},
    {name: "energy", color: "#A9A9A9"}, 
    {name: "bacteries", color: " #DDA0DD"},
    {name: "animals", color: "#32CD32"}];

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
    
svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#000000");
    
svg.append("g")
        .attr("class", "first-elements-container")
        .selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 45)
        .attr("height", 45)
        .attr("x", offsetX)
        .attr("y", function(d, i) {return i*55 + offsetY})
        .attr("fill", function(d){return d.color;})
        .on("click", onElementClick);

svg.append("g")
        .attr("class", "second-elements-container")
        .selectAll("rect")
        .data(elements)
        .enter()
        .append("rect")
        .attr("width", 45)
        .attr("height", 45)
        .attr("x", 780 + offsetX)
        .attr("y", function(d, i) {return i*55 + offsetY})
        .attr("fill", function(d){ return d.color;})
        .on("click", onRightElementClick);

//игровое поле
svg       
        .append("g")
        .append("rect")
        .attr("width", 715)
        .attr("height", 375)
        .attr("x", 55 + offsetX)
        .attr("y", offsetY)
        .attr("fill", "#FFFFE0");

//последнее действие
svg       
        .append("g")
        .append("rect")
        .attr("width", 715)
        .attr("height", 50)
        .attr("x", 55 + offsetX)
        .attr("y", 385 + offsetY)
        .attr("fill", "#DAA520");

//elements on the left
function onElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 100 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;});
            svg.append("g")
            .append("rect")
            .attr("width", 305)
            .attr("height", 55)
            .attr("x", 100 + offsetX)
            .attr("y", 50 + offsetY)
            .attr("fill", "#000000");
}

//elements on the right
function onRightElementClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 665 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;})
}

}

