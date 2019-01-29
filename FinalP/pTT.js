// create html (add links -- add lodash, bootstrap and JQ)
// create js and css (and link them)

// Go look at the data (pick the API)
// wireframe
// The possible HTML code of each element
// Code a single component (with fake data) in HTML
// MOve to js and comment out
// go get the
// grab 1 (_.sample or data[0])
// replace the fake data with variables (from item)



// try to divide your renderers ( lines 33- 39)
// try to use the bootstrap grid 


console.log("hello world")
$(document).ready(function(){
	$.ajax({
	url:"https://jsonplaceholder.typicode.com/photos",
	success: function(res){
		console.log(res)
		var ddd = _.take(res, 100)
		console.log(ddd)
		var item = _.sample(ddd)
		console.log(item)


		
		var imageRender = '<img src="'+ item.url + '" class="card-img-top" />'
		var titleRender = '<h5 class="card=title">' + item.title + '</h5>'
		var textRenderer = '<p class="card-text">' + item.title  + item.title + '</p>'
		var linkRenderer = '<a href="'+ item.url +'" class="btn btn-primary">See image</a>'
		
		var bodyRenderer = '<div class="card-body">'+ titleRender + textRenderer + linkRenderer + '</div>'
		var cardRenderer = '<div class="col col-3" ><div class="card" id="b111">'+ imageRender + bodyRenderer + '</div></div>'


		$("#a000").append('<div id="b000">'+ cardRenderer + '</div>')
	}
})
})

