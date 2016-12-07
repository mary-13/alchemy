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
            //group[0]
		{name: "water", color: "#87CEFA", subelements: [
			{name: "water", color: "#48D1CC", discovered: true},
			{name: "swamp", color: "#156325", discovered: false},
			{name: "quicksylver", color: "#DCDCDC", discovered: false}]}, 
            //group[1]
		{name: "fire", color: " #FF6347", subelements: [
			{name: "fire", color: "#FF4500", discovered: true},
			{name: "lava", color: "#B22222", discovered: false}]},
            //group[2]
		{name: "air", color: "#F8F8FF", subelements: [
			{name: "air", color: "#F0FFF0", discovered: true},
			{name: "steam", color: "#F0FFFF", discovered: false},
			{name: "dust", color: "#FFF8DC", discovered: false},
			{name: "ash", color: "#A9A9A9", discovered: false},
			{name: "storm", color: "#B0E0E6", discovered: false}]},
            //group[3]
		{name: "earth", color: "#CD853F", subelements: [
			{name: "earth", color: "#D2691E", discovered: true},
			{name: "stone", color: "#696969", discovered: false},
			{name: "sand", color: "#FFD700", discovered: false},
			{name: "glass", color: "#F5FFFA", discovered: false},
			{name: "metal", color: "#C0C0C0", discovered: false}]},
            //group[4]
		{name: "energy", color: "#FFEBCD", subelements: [
			{name: "energy", color: "#FFDEAD", discovered: false},
			{name: "life", color: "#FF1493", discovered: false},
			{name: "egg", color: "#FFF0F5", discovered: false}]}, 
            //group[5]
		{name: "bacteries", color: "#DDA0DD", subelements: [
			{name: "weeds", color: "#BA55D3", discovered: false},
			{name: "mushroom", color: "#FF00FF", discovered: false},
			{name: "bacteria", color: "#EE82EE", discovered: false},
			{name: "plankton", color: "#800080", discovered: false},
			{name: "worm", color: "#D8BFD8", discovered: false}]},
            //group[6]
		{name: "animals", color: "#32CD32", subelements: [
			{name: "fish", color: "#008000", discovered: false},
			{name: "whale", color: "#98FB98", discovered: false},
			{name: "snake", color: "#00FF00", discovered: false},
			{name: "bird", color: "#00FF7F", discovered: false},
			{name: "turtle", color: "#3CB371", discovered: false},
			{name: "lizard", color: "#9ACD32", discovered: false}]}];

	var recipies =  {   air:{ earth: groups[2].subelements[2],
                                  fire: groups[4].subelements[0],
                                  water: groups[2].subelements[1],
                                  lava: groups[3].subelements[1],
                                  egg: groups[6].subelements[3] },
                            bacteria:{ water: groups[5].subelements[3],
                                       swamp: groups[5].subelements[4],
                                       plankton: groups[6].subelements[0] },
                            earth:{ water: groups[0].subelements[1],
                                    fire: groups[1].subelements[1],
                                    weeds: groups[5].subelements[1] },
                            egg:{ sand: groups[6].subelements[4] },
                            energy:{ swamp: groups[4].subelements[1] },
                            fire:{ worm: groups[2].subelements[3],
                                   snake: groups[2].subelements[3],
                                   sand: groups[3].subelements[3],
                                   stone: groups[3].subelements[4] },
                            fish:{ plankton: groups[6].subelements[1] },
                            lava:{ water: groups[3].subelements[1] },
                            life:{ stone: groups[4].subelements[2],
                                   water: groups[5].subelements[0],
                                   swamp: groups[5].subelements[2]},
                            metal:{ water: groups[0].subelements[2] },
                            snake:{ snake: groups[4].subelements[2],
                                    worm: groups[6].subelements[5] },
                            stone:{ water: groups[3].subelements[2] },
                            swamp:{ worm: groups[6].subelements[2] }
                        };

	var svg = d3.select("body")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g");
		
	//filling body with the color
	svg.append("svg:image")
		.attr("xlink:href",  "../img/background.jpg")
		.attr("width", "100%")
		.attr("height", "100%");

	//Container witn groups on the left
	svg.append("g")
		.attr("class", "first-groups-container")
		.selectAll("image")
		.data(groups)
		.enter()
		.append("svg:image")
		.attr("xlink:href", function(d) { return "../img/groups/" + d.name+ ".jpg"; })
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
		.on("click", onGroupClick);

	//Container witn groups on the right
	svg.append("g")
		.attr("class", "second-groups-container")
		.selectAll("image")
		.data(groups)
		.enter()
		.append("svg:image")
		.attr("xlink:href", function(d) { return "../img/groups/" + d.name + ".jpg"; })
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
		.on("click", onRightGroupClick);

	//game field
	svg       
		.append("g")
		.append("svg:image")
		.attr("xlink:href",  "../img/gamefield.jpg")
		.attr("width", 715)
		.attr("height", 375)
		.attr("x", 55 + offsetX)
		.attr("y", offsetY);

	//elements on the left
	function onGroupClick(d) {
		//display group on the game field
		svg
			.append("svg:image")
			.attr("xlink:href",  function() { return "../img/groups/" + d.subelements[0].name + ".jpg"; })
			.attr("width", mainsquare)
			.attr("height", mainsquare)
			.attr("x", 100 + offsetX)
			.attr("y", 160 + offsetY)
			.attr("fill", function(){ return d.subelements[0].color;});
		
		// element's background
		svg
			.append("g")
			.append("rect")
			.attr("width", (square+margin)*6 + margin)
			.attr("height", square + 2 * margin)
			.attr("x", 100 + offsetX)
			.attr("y", 50 + offsetY)
			.attr("fill", "#000000");
		
		svg.append("g")
			.selectAll("image")
			.data(d.subelements)
			.enter()
			.append("svg:image")
			.attr("xlink:href",  function(subelement) { return "../img/elements/" + subelement.name + ".jpg"; })
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
			.append("svg:image")
			.attr("xlink:href",  function() { return "../img/groups/" + d.subelements[0].name + ".jpg"; })
			.attr("width", mainsquare)
			.attr("height", mainsquare)
			.attr("x", 665 + offsetX)
			.attr("y", 160 + offsetY)
			.attr("fill", function(){ return d.color;});
		
		// element's background
		svg
			.append("g")
			.append("rect")
			.attr("width", (square+margin)*6 + margin)
			.attr("height", square + 2 * margin)
			.attr("x", 446 + offsetX)
			.attr("y", 270 + offsetY)
			.attr("fill", "#000000");
		
		svg.append("g")
			.selectAll("image")
			.data(d.subelements)
			.enter()
			.append("svg:image")
			.attr("xlink:href",  function(subelement) { return "../img/elements/" + subelement.name + ".jpg"; })
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
			ingridients.sort(function(a, b){
                                        if(a.name < b.name) return -1;
                                        if(a.name > b.name) return 1;
                                        return 0;
}                                       );
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

