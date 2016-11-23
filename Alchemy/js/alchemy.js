

window.onload = function alchemy(){
    var width = 1000;
    var height = 700;
    var offsetX = 10;
    var offsetY = 10;
    var groupsquare = 45;
    var square = 40;
    var mainsquare = 60;
    var margin = 5;
    var leftElement;
    var rightElement;

//groups of elements
var groups = [
    {name: "water", color: "#87CEFA", subelements: [
        {name: "water", color: "#48D1CC", discovered: true},
        {name: "swamp", color: "#156325", discovered: false},
        {name: "quicksylver", color: "#DCDCDC", discovered: false}]}, 

    {name: "fire", color: " #FF6347", subelements: [
        {name: "fire", color: "#FF4500", discovered: true},
        {name: "lava", color: "#B22222", discovered: false}]},

    {name: "air", color: "#F8F8FF", subelements: [
        {name: "air", color: "#F0FFF0", discovered: true},
        {name: "steam", color: "#F0FFFF", discovered: false},
        {name: "dust", color: "#FFF8DC", discovered: false},
        {name: "ash", color: "#A9A9A9", discovered: false},
        {name: "storm", color: "#B0E0E6", discovered: false}]},

    {name: "earth", color: "#CD853F", subelements: [
        {name: "earth", color: "#D2691E", discovered: true},
        {name: "stone", color: "#696969", discovered: false},
        {name: "sand", color: "#FFD700", discovered: false},
        {name: "glass", color: "#F5FFFA", discovered: false},
        {name: "metal", color: "#C0C0C0", discovered: false}]},

    {name: "energy", color: "#FFEBCD", subelements: [
        {name: "energy", color: "#FFDEAD", discovered: false},
        {name: "life", color: "#FF1493", discovered: false},
        {name: "egg", color: "#FFF0F5", discovered: false}]}, 

    {name: "bacteries", color: "#DDA0DD", subelements: [
        {name: "weeds", color: "#BA55D3", discovered: false},
        {name: "mushroom", color: "#FF00FF", discovered: false},
        {name: "bacteria", color: "#EE82EE", discovered: false},
        {name: "plankton", color: "#800080", discovered: false},
        {name: "worm", color: "#D8BFD8", discovered: false}]},

    {name: "animals", color: "#32CD32", subelements: [
        {name: "fish", color: "#008000", discovered: false},
        {name: "whale", color: "#98FB98", discovered: false},
        {name: "snake", color: "#00FF00", discovered: false},
        {name: "bird", color: "#00FF7F", discovered: false},
        {name: "turtle", color: "#3CB371", discovered: false},
        {name: "lizard", color: "#9ACD32", discovered: false}]}];

var recipies = { air:{ earth: groups[2].subelements[2] }};

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
        .attr("visibility", function (group) {
            for (var i=0; i<group.subelements.length; i++){
                if (group.subelements[i].discovered) { 
                    return "visible";
                }
            }
            return "hidden";
        })
        .attr("width", groupsquare)
        .attr("height", groupsquare)
        .attr("x", offsetX)
        .attr("y", function(d, i) {return i*(groupsquare + 2*margin) + offsetY;})
        .attr("fill", function(d){return d.color;})
        .on("click", onGroupClick);

//Container witn groups on the right
svg.append("g")
        .attr("class", "second-groups-container")
        .selectAll("rect")
        .data(groups)
        .enter()
        .append("rect")
        .attr("visibility", function (group) {
            for (var i=0; i<group.subelements.length; i++){
                if (group.subelements[i].discovered) { 
                    return "visible";
                }
            }
            return "hidden";
        })
        .attr("width", groupsquare)
        .attr("height", groupsquare)
        .attr("x", 780 + offsetX)
        .attr("y", function(d, i) {return i*(groupsquare + 2*margin) + offsetY;})
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
            .attr("width", mainsquare)
            .attr("height", mainsquare)
            .attr("x", 100 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.subelements[0].color;});
    svg
            .append("g")
            .append("rect")
            .attr("width", (square+margin)*6 + margin)
            .attr("height", square + 2 * margin)
            .attr("x", 100 + offsetX)
            .attr("y", 50 + offsetY)
            .attr("fill", "#000000");
    
    svg.append("g")
            .selectAll("rect")
            .data(d.subelements)
            .enter()
            .append("rect")
            .attr("visibility", function (subelement) {
                return subelement.discovered ? "visible": "hidden";})
            .attr("width", square)
            .attr("height", square)
            .attr("x", function(d, i) {return i*(square+margin) + offsetX + 105;})
            .attr("y", 55 + offsetY)
            .attr("fill", function(d){ return d.color;})
            .on("click", onElementClick);
}

//elements on the right
function onRightGroupClick(d) {
    svg
            .append("rect")
            .attr("width", mainsquare)
            .attr("height", mainsquare)
            .attr("x", 665 + offsetX)
            .attr("y", 160 + offsetY)
            .attr("fill", function(){ return d.color;});
    svg
            .append("g")
            .append("rect")
            .attr("width", (square+margin)*6 + margin)
            .attr("height", square + 2 * margin)
            .attr("x", 446 + offsetX)
            .attr("y", 270 + offsetY)
            .attr("fill", "#000000");
    
    svg.append("g")
            .selectAll("rect")
            .data(d.subelements)
            .enter()
            .append("rect")
            .attr("visibility", function (subelement) {
                return subelement.discovered ? "visible": "hidden";})
            .attr("width", square)
            .attr("height", square)
            .attr("x", function(d, i) {return i*(square+margin) + offsetX + 451;})
            .attr("y", 275 + offsetY)
            .attr("fill", function(d){ return d.color;})
            .on("click", onRightElementClick);
}

function onElementClick(d){
    leftElement = d;
    var result = tryMergeElements();
}

function onRightElementClick(d) {
    rightElement = d;
    var result = tryMergeElements();
}

function tryMergeElements(){
    if (leftElement && rightElement) {
        var ingridients = [leftElement, rightElement];
        ingridients.sort();
        var result = recipies[ingridients[0].name];
        if(result){
            result = result[ingridients[1].name];
            if(result){
                result.discovered = true;
                leftElement = null;
                rightElement = null;
                return result;
            }
        }
    }
}

};

