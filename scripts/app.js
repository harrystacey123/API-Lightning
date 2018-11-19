var triviaURL = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

function shuffle (arr) {
    new_arr = Array();

    while (arr.length > 0) {
        idx = Math.round(Math.random() * (arr.length - 1));
        element = arr[idx];
        arr[idx] = arr[arr.length - 1];
        arr.pop();
        new_arr.push(element);
    }
    return new_arr;
}

$(document).ready(function() {
    console.log(`Success`);

    $.ajax({
        url: triviaURL,
        method: `GET`,
        success: function(response) {
            console.log(response);
            response.results.forEach(element => { console.log(element);
                var quest = `<p>${element.question}</p>`
                $(`.harry`).append(quest);
                answers = Array();
                for (i = 0; i < element.incorrect_answers.length; i++) {
                    answers.push({'text': element.incorrect_answers[i], 'correct': false});
                }
                answers.push({'text': element.correct_answer, 'correct': true});
                answers = shuffle(answers);

                for (i = 0; i < answers.length; i++) {
                    btt = $('<button>', {html: answers[i].text});
                    $('.harry').append(`<li>`);
                    $('.harry').append(btt);
                    $('.harry').append(`</li>`);
                    if (answers[i].correct) {
                        btt.on(`click`, function() {
                            scoreTotal += 1;
                            console.log(scoreTotal);
                            $(`.next`).html(`Score: ` + scoreTotal);
                        })
                    }

                }
            })
            var scoreTotal = 0;
            $()
        }
    })
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    
        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };
    
        return t;
    }(document, "script", "twitter-wjs"));
})

