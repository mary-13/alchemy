

window.onload = function alchemy(){
    var width = 1000;
    var height = 700;
    var cellSize = 17; // cell size
    var offsetX = 10;
    var offsetY = 10;


//groups of elements
var groups = [
    {name: "water", color: "#87CEFA", subelements: [
        {name: "water", color: "#87CEFA"},
        {name: "swamp", color: "#87CEFA"},
        {name: "quicksylver", color: "#87CEFA"}]}, 
    {name: "fire", color: " #FF4500", subelements: [
        {name: "fire", color: "#FF4500"},
        {name: "lava", color: "#FF4500"}]},
    {name: "air", color: "#F8F8FF", subelements: [
        {name: "air", color: "#F8F8FF"},
        {name: "steam", color: "#F8F8FF"},
        {name: "dust", color: "#F8F8FF"},
        {name: "ash", color: "#F8F8FF"},
        {name: "storm", color: "#F8F8FF"}]},
    {name: "earth", color: "#CD853F", subelements: [
        {name: "earth", color: "#CD853F"},
        {name: "stone", color: "#CD853F"},
        {name: "sand", color: "#CD853F"},
        {name: "glass", color: "#CD853F"},
        {name: "metal", color: "#CD853F"}]},
    {name: "energy", color: "#A9A9A9", subelements: [
        {name: "energy", color: "#A9A9A9"},
        {name: "life", color: "#A9A9A9"},
        {name: "egg", color: "#A9A9A9"}]}, 
    {name: "bacteries", color: " #DDA0DD", subelements: [
        {name: "weeds", color: "#DDA0DD"},
        {name: "mushroom", color: "#DDA0DD"},
        {name: "bacteria", color: "#DDA0DD"},
        {name: "plankton", color: "#DDA0DD"},
        {name: "worm", color: "#DDA0DD"}]},
    {name: "animals", color: "#32CD32", subelements: [
        {name: "fish", color: "#32CD32"},
        {name: "whale", color: "#32CD32"},
        {name: "snake", color: "#32CD32"},
        {name: "bird", color: "#32CD32"},
        {name: "turtle", color: "#32CD32"},
        {name: "lizard", color: "#32CD32"}]}];

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
        .attr("y", function(d, i) {return i*55 + offsetY;})
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
        .attr("y", function(d, i) {return i*55 + offsetY;})
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
            .attr("width", 279)
            .attr("height", 54)
            .attr("x", 100 + offsetX)
            .attr("y", 50 + offsetY)
            .attr("fill", "#000000");
    
    svg.append("g")
            .selectAll("rect")
            .data(d.subelements)
            .enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", 40)
            .attr("x", function(d, i) {return i*45 + offsetX + 107;})
            .attr("y", 57 + offsetY)
            .attr("fill", function(d){ return d.color;});
}

//elements on the right
function onRightGroupClick(d) {
    svg
            .append("rect")
            .attr("width", 60)
            .attr("height", 60)
            .attr("x", 665 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;});
    svg
            .append("g")
            .append("rect")
            .attr("width", 279)
            .attr("height", 54)
            .attr("x", 446 + offsetX)
            .attr("y", 270 + offsetY)
            .attr("fill", "#000000");
    
    svg.append("g")
            .selectAll("rect")
            .data(d.subelements)
            .enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", 40)
            .attr("x", function(d, i) {return i*45 + offsetX + 453;})
            .attr("y", 277 + offsetY)
            .attr("fill", function(d){ return d.color;});
}

};

