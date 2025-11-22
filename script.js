$(document).ready(function () {

    let questions = [
        { q: "1. What does HTML stand for?",
          options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Marking Language"],
          answer: 1 },

        { q: "2. Which HTML tag is used to create a hyperlink?",
          options: ["link", "a", "href"],
          answer: 1 },

        { q: "3. CSS stands for:",
          options: ["Cascading Style Sheets", "Colorful Style System", "Creative Styling Syntax"],
          answer: 0 },

        { q: "4. Which property changes text color?",
          options: ["font-color", "text-color", "color"],
          answer: 2 },

        { q: "5. Which symbol is used for IDs in CSS?",
          options: ["#", ".", "*"],
          answer: 0 },

        { q: "6. JavaScript is used for:",
          options: ["Styling pages", "Structuring content", "Adding interactivity"],
          answer: 2 },

        { q: "7. Which keyword declares a variable in JS?",
          options: ["var", "make", "set"],
          answer: 0 },

        { q: "8. jQuery is a:",
          options: ["CSS framework", "JavaScript library", "Markup language"],
          answer: 1 },

        { q: "9. Which operator compares both value & type?",
          options: ["==", "===", "="],
          answer: 1 },

        { q: "10. Which function displays text in the console?",
          options: ["console.write()", "console.log()", "log.console()"],
          answer: 1 }
    ];

    let index = 0;
    let score = 0;

    function updateScoreTally() {
        $("#score-tally").text(`Score: ${score} / ${questions.length}`);
    }

    function loadQuestion() {
        let q = questions[index];

        $("#quiz-card").html(`
            <h2>${q.q}</h2>
            <div class="options">
                ${q.options.map((option, i) =>
                    `<label><input type="radio" name="option" value="${i}"> ${option}</label><br>`
                ).join("")}
            </div>
        `);
    }

    loadQuestion();

    // Next Question
    $("#next-btn").click(function () {
        let selected = $("input[name='option']:checked").val();

        if (selected === undefined) {
            alert("Please select an answer!");
            return;
        }

        if (selected == questions[index].answer) {
            score++;
            updateScoreTally();
        }

        index++;

        if (index < questions.length) {
            loadQuestion();
        } else {
            $("#quiz-card").hide();
            $("#next-btn").hide();
            $("#toggle-btn").hide();

            $("#result").show().html(`
                <h2>Your Final Score: ${score} / ${questions.length}</h2>
            `);
        }
    });

    // Show/Hide Questions
    $("#toggle-btn").click(function () {
        $("#quiz-card").toggle();

        if ($("#quiz-card").is(":visible")) {
            $(this).text("Hide Questions");
        } else {
            $(this).text("Show Questions");
        }
    });

});



  window.onload = () => {
    const designs = document.querySelectorAll('.design');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    designs.forEach(el => {
      const x = Math.random() * (containerWidth - 100);
      const y = Math.random() * (containerHeight - 100);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });
  };