
$(document).ready(function(){

    $("#realboy").click(function(){

    $.ajax({
    url: 'https://api.forismatic.com/api/1.0/',
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
    success: function(data){
        var quote = data.quoteText
        var author = data.quoteAuthor

        $(".quotespot").empty();    
        $(".quotespot").append("<div class='animated fadeIn'><h3>"+quote+"</h3></div>");
        $(".authors").empty();
        $(".authors").append("<div class='animated fadeIn'><h3>-"+author+"</h3></div>")

        if(author === ""){
            $(".authors").html("<div class='animated fadeIn'><h3>-Unknown</h3></div>")
        }
    }
});

});

});