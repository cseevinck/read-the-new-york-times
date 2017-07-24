 $( document ).ready(function(){
 	    $("#find-article").click(function (e) {

                    e.preventDefault();

                    var option = $("#search-result option:selected").val();
                    var api_key= 'Place your own API key here.';
                     var api = "https://api.nytimes.com/svc/topstories/v2/" + option + ".json?api-key="+ api_key;
                            $.ajax({
                        url: api,
                        method: 'GET'
                    }).done(function (data) {
                        var section = data.results[0].section;
                        $("#section").html('<p class="tm">' + section + '</p>');
                        var title = data.results[0].title;
                        $("#title").html('<p class="tm">' + title + '</p>');
                        var description = data.results[0].abstract;
                        $("#desc").html('<p class="tm">' + description + '</p>');
                        var result = data.results[0].multimedia[2].url;
                        $("#result").html('<div class="tm"><img src="' + result + '"></div>');

                    });
                });
 });
