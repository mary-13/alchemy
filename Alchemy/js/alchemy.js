

window.onload = function alchemy(){
    var width = 1000;
    var height = 700;
    var cellSize = 17; // cell size
    var offsetX = 10;
    var offsetY = 10;


//groups of elements
var groups = [
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
    
    //filling body with the color
svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#000000");

    //Container witn groups on the left
svg.append("g")
        .attr("class", "first-groups-container")
        .selectAll("rect")
        .data(groups)
        .enter()
        .append("rect")
        .attr("width", 45)
        .attr("height", 45)
        .attr("x", offsetX)
        .attr("y", function(d, i) {return i*55 + offsetY})
        .attr("fill", function(d){return d.color;})
        .on("click", onGroupClick);

//Container witn groups on the right
svg.append("g")
        .attr("class", "second-groups-container")
        .selectAll("rect")
        .data(groups)
        .enter()
        .append("rect")
        .attr("width", 45)
        .attr("height", 45)
        .attr("x", 780 + offsetX)
        .attr("y", function(d, i) {return i*55 + offsetY})
        .attr("fill", function(d){ return d.color;})
        .on("click", onRightGroupClick);

//game field
svg       
        .append("g")
        .append("rect")
        .attr("width", 715)
        .attr("height", 375)
        .attr("x", 55 + offsetX)
        .attr("y", offsetY)
        .attr("fill", "#FFFFE0");

//last recipe
svg       
        .append("g")
        .append("rect")
        .attr("width", 715)
        .attr("height", 50)
        .attr("x", 55 + offsetX)
        .attr("y", 385 + offsetY)
        .attr("fill", "#DAA520");

//elements on the left
function onGroupClick(d) {
    //display group on the game field
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 100 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;});
    svg
            .append("g")
            .append("rect")
            .attr("width", 305)
            .attr("height", 55)
            .attr("x", 100 + offsetX)
            .attr("y", 50 + offsetY)
            .attr("fill", "#000000");
}

//elements on the right
function onRightGroupClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 665 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;})
}

}

