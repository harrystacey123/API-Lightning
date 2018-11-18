var triviaURL = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

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
                var wrongAnswer0 = `<li><button>${element.incorrect_answers[0]}</button></li>`;
                var wrongAnswer1 = `<li><button>${element.incorrect_answers[1]}</button></li>`;
                var wrongAnswer2 = `<li><button>${element.incorrect_answers[2]}</button></li>`;
                var correctAnswer = `<li><button>${element.correct_answer}</button></li>`;
                $(`.harry`).append(wrongAnswer0);
                $(`.harry`).append(wrongAnswer1);
                $(`.harry`).append(wrongAnswer2);
                $(`.harry`).append(correctAnswer);
                var i = 0;
                $('.harry').find('li').each(function(){
                if(i<4){
                i++;
                }
                else{
                i = 1;
                }
                $(this).addClass('class-' + i);
                });
            })
            var scoreTotal = 0;
            $(`.class-4`).on(`click`, function() {
                scoreTotal += 1;
                console.log(scoreTotal);
            })
        }
    })
})