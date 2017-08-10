
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
        $(".quotespot").append("<div class='animated fadeIn'><h3>"+quote+" -"+author+"</h3></div>");
        if(author === ""){
            $(".quotespot").html("<div class='animated fadeIn'><h3>"+quote+" -Unknown</h3></div>");
        }
    }
});
});

$('.btn').click(function(data){
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
});


});