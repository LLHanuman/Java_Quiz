//constants
$(".answer").hide()
$(".question").hide()
$(".alert").hide()
$('.retry').hide()
$('.initials').hide()
$(".noTime").hide()
$('#allScores').hide()
var initials = document.querySelector(".initials");


// shows previous scores

$(".Scores").click(function() {
    event.preventDefault();

    $('#allScores').show()
    $(".answer").hide()
    $(".question").hide()
    $(".alert").hide()
    $('.retry').hide()
    $('.initials').hide()
    $(".noTime").hide()
    $("#listScore").prepend(savedinitials + " had " + secondsLeft + " seconds left!")

})



const questions = {
    question1: 'What is the Javascrip logo suppsed to be?',
    question2: 'What does console.log do?',
    question3: 'Java and Javascript are used for the same reason',
    question4: 'Is JavaScript single or multi threaded?'
};

const answers = {
    q1a1: 'Coffee',
    q1a2: 'Tornado',

    q2a1: 'Helps Debug code',
    q2a2: 'print output',
    q2a3: 'Shows your HTML code',
    q2a4: 'Makes you look like a weeb',

    q3a1: 'False',
    q3a2: 'True',

    q4a1: 'Multi',
    q4a2: 'Single',
}

//onclick shows questions
$("#startbtn").click(function() {
        event.preventDefault();
        setTime()
        console.log("clicked")
        firstQuestion()
    })
    // question 1
function firstQuestion() {
    //startquiz shows question and answer
    $("#startbtn").hide()
    $(".q1").show()
        // a1 q1a1 = true
        // a2 q1a2 = false
    $(".q1").append(questions.question1)
    $(".a1").show()
    $(".a2").show()
    $(".a1").append(answers.q1a1);
    $(".a2").append(answers.q1a2);
    if ($('.a1').click(function() {
            $(".true").show()
            $('.next').click(function() {
                secondQuestion()
            })
        }));
    if ($('.a2').click(function() {
            $(".false").show()
            $('.next').click(function() {
                secondQuestion()
            })
        })) {}
}

// question 2 
function secondQuestion() {
    // a3 q2a1 = true
    // a4 q2a2 = true
    // a5 q2a3 = false
    // a6 q2a4 = false

    $('.alert').hide()
    $(".q1").hide()
    $(".a1").hide()
    $(".a2").hide()
    $(".q2").show()
    $(".a3").show()
    $(".a4").show()
    $(".a5").show()
    $(".a6").show()
    $(".q2").append(questions.question2)
    $(".a3").append(answers.q2a1);
    $(".a4").append(answers.q2a2);
    $(".a5").append(answers.q2a3);
    $(".a6").append(answers.q2a4);

    if ($('.a3').click(function() {
            $(".true").show()
            $('.next').click(function() {
                thirdQuestion()
            })
        }))
        if ($('.a4').click(function() {
                $(".true").show()
                $('.next').click(function() {
                    thirdQuestion()
                })
            }))
            if ($('.a5').click(function() {
                    $(".false").show()
                    $('.next').click(function() {
                        thirdQuestion()
                    })
                }))
                if ($('.a6').click(function() {
                        $(".false").show()
                        $('.next').click(function() {
                            thirdQuestion()
                        })
                    })) {}
}

// question 3
function thirdQuestion() {
    // a7 q3a1 = true
    // a8 q3a2 = false

    $('.alert').hide()
    $(".q2").hide()
    $(".a3").hide()
    $(".a4").hide()
    $(".a5").hide()
    $(".a6").hide()
    $(".q3").show()
    $(".a7").show()
    $(".a8").show()
    $(".q3").append(questions.question3)
    $(".a7").append(answers.q3a1)
    $(".a8").append(answers.q3a2)
    if ($('.a7').click(function() {
            $(".true").show()
            $('.next').click(function() {
                fourthQuestion()
            })
        }))
        if ($('.a8').click(function() {
                $(".false").show()
                $('.next').click(function() {
                    fourthQuestion()
                })
            })) {}
}

// question 4
function fourthQuestion() {
    // a9 q4a1 = true
    // a10 q4a2 = false

    $(".q3").hide()
    $(".a7").hide()
    $(".a8").hide()
    $('.q4').show()
    $('.a9').show()
    $('.a10').show()
    $('.q4').append(questions.question4)
    $('.a9').append(answers.q4a1)
    $('.a10').append(answers.q4a2)
    if ($('.a9').click(function() {
            $(".true").show()
            $('.next').click(function() {
                end()
            })
        }))
        if ($('.a10').click(function() {
                $(".false").show()
                $('.next').click(function() {
                    end()
                })
            })) {}
}

function end() {
    $(".question").hide()
    $(".alert").hide()
    $(".answer").hide()
    $(".finished").append("You finished the quiz! Good job! Add your initials to the score board!")

}


//Timer displayed on navbar
var timeEl = document.querySelector(".timeLeft");
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {

            sendMessage()
        }

    }, 1000);

    function sendMessage() {
        $(".answer").hide()
        $(".question").hide()
        $(".alert").hide()
        $('.timeleft').hide()
        $('.noTime').show()
        $('.retry').show()
    }
    $('.retry').click(function() {
        location.reload()
    })
};


//correct - adding to timer

if ($('.a1').click(function() {
        correct();
    }))
    if ($('.a3').click(function() {
            correct();
        }))
        if ($('.a4').click(function() {
                correct();
            }))
            if ($('.a7').click(function() {
                    correct();
                }))
                if ($('.a9').click(function() {
                        correct();
                        finalScore = secondsLeft;
                        console.log(finalScore)
                        $('.initials').show()

                    }))

                function correct() {
        secondsLeft = secondsLeft + 5;
    }
    //  incorrect - minusing from timer
if ($('.a2').click(function() {
        incorrect();
    }))
    if ($('.a5').click(function() {
            incorrect();
        }))
        if ($('.a6').click(function() {
                correincorrectct();
            }))
            if ($('.a8').click(function() {
                    incorrect();
                }))
                if ($('.a10').click(function() {
                        incorrect();
                        finalScore = secondsLeft;
                        localStorage.setItem("playerScore", finalScore)
                        console.log(finalScore)
                        $('.initials').show()

                    }))

                function incorrect() {
    secondsLeft = secondsLeft - 5;
}


// adding info to local storage 

$("#saveInitials").click(function() {
    save()
        // Showing your score upon quiz completion.
    function save() {
        event.preventDefault();
        $('#allScores').show()
        console.log("clicked")

        var savedinitials = document.getElementById("userInitials").value;

        console.log(savedinitials)

        $("#listScore").prepend(savedinitials + " had " + secondsLeft + " seconds left!")



    }
})



// Get input from the input bar








// score page ( HTML no.2 )


console.log("Don't get mad; it's hard!")