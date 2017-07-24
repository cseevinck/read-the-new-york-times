 $( document ).ready(function(){
 	    $("#find-article").click(function (e) {

                    e.preventDefault();

                    var option = $("#search-result option:selected").val();
                    var api_key= 'Place for your own API key.';
                     var api = "https://api.nytimes.com/svc/topstories/v2/" + option + ".json?api-key="+ api_key;
                });
 });