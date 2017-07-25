      $(document).ready(function () {
                var api_key = '';
                var api = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + api_key;
                $.ajax({
                    url: api,
                    method: 'GET'
                }).done(function (data) {
                    var section = data.results[0].section;
                    $("#section").html('<p class="right">' + section + '</p>');
                    $('<hr>').insertBefore("#title");

                    var title = data.results[0].title;
                    $("#title").html('<p>' + title + '</p>');
                    var description = data.results[0].abstract;
                    $("#desc").html('<p class="tm">' + description + '</p>');
                    var result = data.results[0].multimedia[2].url;
                    $("#image").html('<div class="img"><img src="' + result + '"></div>');

                    $("#find-article").click(function (e) {
                        e.preventDefault();
                        option = $("#search-result option:selected").val();
                        api = "https://api.nytimes.com/svc/topstories/v2/" + option + ".json?api-key=" + api_key;
                        $.ajax({
                            url: api,
                            method: 'GET'
                        }).done(function (data) {
                            var section = data.results[0].section;
                            $("#section").html('<p class="right">' + section + '</p>');
                            
                            var title = data.results[0].title;
                            $("#title").html('<p>' + title + '</p>');
                            var description = data.results[0].abstract;
                            $("#desc").html('<p class="tm">' + description + '</p>');
                            var result = data.results[0].multimedia[2].url;
                            $("#image").html('<div class="img"><img src="' + result + '"></div>');
                        });
                    });
                });
            });