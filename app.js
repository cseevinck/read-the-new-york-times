      $(document).ready(function () {
                var api_key = '';
                var api = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + api_key;
                $.ajax({
                    url: api,
                    method: 'GET'
                }).done(function (data) {
                    var results = data.results;
                    for (var i = 0; i < results.length; i++) {

                        $('<div/>', {
                            html: '<p>' + results[i].section + '</p>',
                            class: 'right'
                        }).appendTo('.result-box');
                        $('<hr>').appendTo('.result-box');
                        $('<div/>', {
                            html: '<p>' + results[i].title + '</p>'
                        }).appendTo('.result-box');
                        $('<div/>', {
                            html: '<p>' + results[i].abstract + '</p>'
                        }).appendTo('.result-box');
//                        $('<div/>', {
//                            html: '<div><img src="' + results[i].multimedia[1].url + '"></div>',
//                            class: 'img'
//                        }).appendTo('.result-box');
                        $('<div/>', {
                            html: '<div><a href="' + results[i].url + '">Read more ...</a></div>',
                            class: 'read'
                        }).appendTo('.result-box');

                    }

                    $("#find-article").click(function (e) {
                        e.preventDefault();
                        option = $("#search-result option:selected").val();
                        api = "https://api.nytimes.com/svc/topstories/v2/" + option + ".json?api-key=" + api_key;
                        $.ajax({
                            url: api,
                            method: 'GET'
                        }).done(function (data) {
                               var results = data.results;
                    for (var i = 0; i < results.length; i++) {

                        $('<div/>', {
                            html: '<p>' + results[i].section + '</p>',
                            class: 'right'
                        }).appendTo('.result-box');
                        $('<hr>').appendTo('.result-box');
                        $('<div/>', {
                            html: '<p>' + results[i].title + '</p>'
                        }).appendTo('.result-box');
                        $('<div/>', {
                            html: '<p>' + results[i].abstract + '</p>'
                        }).appendTo('.result-box');
//                        $('<div/>', {
//                            html: '<div><img src="' + results[i].multimedia[1].url + '"></div>',
//                            class: 'img'
//                        }).appendTo('.result-box');
                        $('<div/>', {
                            html: '<div><a href="' + results[i].url + '">Read more ...</a></div>',
                            class: 'read'
                        }).appendTo('.result-box');

                    }                        });
                    });
                });
            });