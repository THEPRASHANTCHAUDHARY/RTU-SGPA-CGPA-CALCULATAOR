const gradeMap = {
    "A++": 10,
    "A+" : 9,
    "A"  : 8.5,
    "B+" : 8,
    "B"  : 7.5,
    "C+" : 7,
    "C"  : 6.5,
    "D+" : 6,
    "D"  : 5.5,
    "E+" : 5,
    "E"  : 4,
    "F"  : 0
};

// 🔥 DATA BASED ON BRANCH + SEM
const data = {
    CSE: {
        sem1: [
            { name: "Communication Skills", credit: 2 },
            { name: "Language Lab", credit: 1 },
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Engineering Physics Lab", credit: 1 },
            { name: "Programming in C", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 1.5 },
            { name: "Basic Electric Engineering Lab", credit: 1 },
            { name: "Computer Aided Machine Drawing", credit: 1.5 },
            { name: "Sports I", credit: 0.5 }

        ],
        sem2: [
            { name: "Human Values", credit: 2 },
            { name: "Human Values Activities & Sports", credit: 1 },
            { name: "Engineering Mathematics-II", credit: 4 },
            { name: "Engineering Chemistry", credit: 4 },
            { name: "Engineering Chemistry Lab", credit: 1 },
            { name: "Basic Mechanical Engineering", credit: 2 },
            { name: "Basic Civil Engineering", credit: 2 },
            { name: "Manufacturing Practices Workshop", credit: 1.5 },
            { name: "Basic Civil Engineering Lab", credit: 1 },
            { name: "Computer Aided Engineering Graphics", credit: 1.5 },
            { name: "Sports II", credit: 0.5 }
        ],
        sem3: [
            { name: "Managerial Economics and Financial Analysis", credit: 2 },
            { name: "Advanced Engineering Mathematics", credit: 3 },
            { name: "Digital Electronics", credit: 3 },
            { name: "Data Structure & Algorithms", credit: 3 },
            { name: "Object Oriented Programming", credit: 3 },
            { name: "Software Engineering", credit: 3 },
            { name: "Data Structure & Algorithm Lab", credit: 1.5 },
            { name: "Object Oriented Programming Lab", credit: 1.5 },
            { name: "Software Engineering Lab", credit: 1.5 },
            { name: "Digital Electronics Lab", credit: 1.5 },
            { name: "Industrial Training", credit: 1 },
            { name: "Business Communication & Presentation Skills", credit: 0.5 }
        ],
        sem4: [
            { name: "Technical Comunication", credit: 2 },
            { name: "Discrete Mathematics Structure", credit: 3 },
            { name: "Microprocessor & Interfaces", credit: 3 },
            { name: "Database Management System", credit: 3 },
            { name: "Theory of Computation", credit: 3 },
            { name: "Data Communication and Computer Networks", credit: 3 },
            { name: "Microprocessor & Interfaces Lab", credit: 1 },
            { name: "Database Management System Lab", credit: 1.5 },
            { name: "Network Programming Lab", credit: 1.5 },
            { name: "Linux Shell Programming Lab", credit: 1 },
            { name: "Java Lab", credit: 0.5 },
            { name: "Social Outreach, Discipline & Extracurricular Activities", credit: 0.5 }
        ],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: [],

    },
    IT: {
        sem1: [
           { name: "Human Values", credit: 2 },
            { name: "Human Values Activities & Sports", credit: 1 },
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Chemistry", credit: 4 },
            { name: "Engineering Chemistry Lab", credit: 1 },
            { name: "Basic Mechanical Engineering", credit: 2 },
            { name: "Basic Civil Engineering", credit: 2 },
            { name: "Manufacturing Practices Workshop", credit: 1.5 },
            { name: "Basic Civil Engineering Lab", credit: 1 },
            { name: "Computer Aided Machine Drawing", credit: 1.5 },
            { name: "Sports II", credit: 0.5 }
        ],
        sem2: [
            { name: "Communication Skills", credit: 2 },
            { name: "Language Lab", credit: 1 },
            { name: "Engineering Mathematics-II", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Engineering Physics Lab", credit: 1 },
            { name: "Programming in C", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 1.5 },
            { name: "Basic Electric Engineering Lab", credit: 1 },
            { name: "Computer Aided Machine Drawing", credit: 1.5 },
            { name: "Sports I", credit: 0.5 }
        ],
        sem3: [
            { name: "Technical Communication", credit: 2 },
            { name: "Advanced Engineering Mathematics", credit: 3 },
            { name: "Digital Electronics", credit: 3 },
            { name: "Data Structure & Algorithms", credit: 3 },
            { name: "Object Oriented Programming", credit: 3 },
            { name: "Software Engineering", credit: 3 },
            { name: "Data Structure & Algorithm Lab", credit: 1.5 },
            { name: "Object Oriented Programming Lab", credit: 1.5 },
            { name: "Software Engineering Lab", credit: 1.5 },
            { name: "Digital Electronics Lab", credit: 1.5 },
            { name: "Industrial Training", credit: 1 },
            { name: "Social Outreach, Discipline & Extracurricular Activities", credit: 0.5 }
        ],
        sem4: [
            { name: "Managerial Economics & Financial Accounting", credit: 2 },
            { name: "Discrete Mathematics Structure", credit: 3 },
            { name: "Principle of Communication", credit: 3 },
            { name: "Database Management System", credit: 3 },
            { name: "Theory of Computation", credit: 3 },
            { name: "Data Communication and Computer Networks", credit: 3 },
            { name: "Web Technology Lab", credit: 1 },
            { name: "Database Management System Lab", credit: 1.5 },
            { name: "Network Programming Lab", credit: 1.5 },
            { name: "Linux Shell Programming Lab", credit: 1 },
            { name: "Java Lab", credit: 0.5 },
            { name: "Social Outreach, Discipline & Extracurricular Activities", credit: 0.5 }
        
        ],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: [],
    },
    'AI&DS': {
        sem1: [
            { name: "Human Values", credit: 2 },
            { name: "Human Values Activities & Sports", credit: 1 },
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Chemistry", credit: 4 },
            { name: "Engineering Chemistry Lab", credit: 1 },
            { name: "Basic Mechanical Engineering", credit: 2 },
            { name: "Basic Civil Engineering", credit: 2 },
            { name: "Manufacturing Practices Workshop", credit: 1.5 },
            { name: "Basic Civil Engineering Lab", credit: 1 },
            { name: "Computer Aided Machine Drawing", credit: 1.5 },
            { name: "Sports II", credit: 0.5 }
        ],
        sem2: [
            { name: "Communication Skills", credit: 2 },
            { name: "Language Lab", credit: 1 },
            { name: "Engineering Mathematics-II", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Engineering Physics Lab", credit: 1 },
            { name: "Programming in C", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 1.5 },
            { name: "Basic Electric Engineering Lab", credit: 1 },
            { name: "Computer Aided Machine Drawing", credit: 1.5 },
            { name: "Sports I", credit: 0.5 }
        ],
        sem3: [
            { name: "Technical Comunication", credit: 2 },
            { name: "Advanced Engineering Mathematics", credit: 3 },
            { name: "Digital Electronics", credit: 3 },
            { name: "Data Structure & Algorithms", credit: 3 },
            { name: "Object Oriented Programming", credit: 3 },
            { name: "Software Engineering", credit: 3 },
            { name: "Data Structure & Algorithm Lab", credit: 1.5 },
            { name: "Object Oriented Programming Lab", credit: 1.5 },
            { name: "Software Engineering Lab", credit: 1.5 },
            { name: "Digital Electronics Lab", credit: 1.5 },
            { name: "Industrial Training", credit: 1 },
            { name: "Financial Literacy", credit: 0.5 }
        ],
        sem4: [
            { name: "Managerial Economics and Financial Analysis", credit: 2 },
            { name: "Discrete Mathematics Structure", credit: 3 },
            { name: "Microprocessor & Interfaces", credit: 3 },
            { name: "Database Management System", credit: 3 },
            { name: "Theory of Computation", credit: 3 },
            { name: "Data Communication and Computer Networks", credit: 3 },
            { name: "Microprocessor & Interfaces Lab", credit: 1 },
            { name: "Database Management System Lab", credit: 1.5 },
            { name: "Network Programming Lab", credit: 1.5 },
            { name: "Linux Shell Programming Lab", credit: 1 },
            { name: "Java Lab", credit: 1 },
            { name: "Business Communication & Presentation Skills", credit: 0.5 }
        ],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: []

    },
    ME: {
        sem1: [
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Communication Skills", credit: 2 },
            { name: "Introduction to Entrepreneurship Skills", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 4 },
            { name: "Programming in C", credit: 4 },
            { name: "Engineering Physics Lab", credit: 2 },
            { name: "Language Lab", credit: 2 },
            { name: "Entrepreneurship Skills Lab", credit: 2 },
            { name: "Basic Electric Engineering Lab", credit: 2 },
            { name: "Computer Aided Machine Drawing", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 2 },
            { name: "Foundation Course", credit: 2 }
        ],
        sem2: [],
        sem3: [],
        sem4: [],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: []

    },
    EE: {
        sem1: [
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Communication Skills", credit: 2 },
            { name: "Introduction to Entrepreneurship Skills", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 4 },
            { name: "Programming in C", credit: 4 },
            { name: "Engineering Physics Lab", credit: 2 },
            { name: "Language Lab", credit: 2 },
            { name: "Entrepreneurship Skills Lab", credit: 2 },
            { name: "Basic Electric Engineering Lab", credit: 2 },
            { name: "Computer Aided Machine Drawing", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 2 },
            { name: "Foundation Course", credit: 2 }
        ],
        sem2: [],
        sem3: [],
        sem4: [],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: []

    },
    ECE: {
        sem1: [
            { name: "Engineering Mathematics-I", credit: 4 },
            { name: "Engineering Physics", credit: 4 },
            { name: "Communication Skills", credit: 2 },
            { name: "Introduction to Entrepreneurship Skills", credit: 2 },
            { name: "Basic Electrical Engineering", credit: 4 },
            { name: "Programming in C", credit: 4 },
            { name: "Engineering Physics Lab", credit: 2 },
            { name: "Language Lab", credit: 2 },
            { name: "Entrepreneurship Skills Lab", credit: 2 },
            { name: "Basic Electric Engineering Lab", credit: 2 },
            { name: "Computer Aided Machine Drawing", credit: 2 },
            { name: "Computer Programming Lab-I", credit: 2 },
            { name: "Foundation Course", credit: 2 }
        ],
        sem2: [],
        sem3: [],
        sem4: [],
        sem5: [],
        sem6: [],
        sem7: [],
        sem8: []

    },
};

// Marks → Grade
function getGradeFromMarks(marks) {
    if (marks >= 90) return "A++";
    if (marks >= 85) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 75) return "B+";
    if (marks >= 70) return "B";
    if (marks >= 65) return "C+";
    if (marks >= 60) return "C";
    if (marks >= 55) return "D+";
    if (marks >= 50) return "D";
    if (marks >= 45) return "E+";
    if (marks >= 40) return "E";
    return "F";
}

// Load subjects
function loadSubjects() {
    let branch = document.getElementById("branch").value;
    let sem = document.getElementById("semester").value;

    let container = document.getElementById("subjects");
    container.innerHTML = "";

    if (!branch || !sem) return;

    let subjects = data[branch][sem];

    subjects.forEach(sub => {
        container.innerHTML += `
            <div class="row">
                <span class="sub">${sub.name} (${sub.credit})</span>

                <input type="number" placeholder="Marks"
                    oninput="autoFillGrade(this)">

                <select onchange="clearMarks(this)">
                    // <option value="">Grade</option>
                    <option>A++</option>
                    <option>A+</option>
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                    <option>C+</option>
                    <option>C</option>
                    <option>D+</option>
                    <option>D</option>
                    <option>E+</option>
                    <option>E</option>
                    <option>F</option>
                </select>
            </div>
        `;
    });
}

// Auto grade
function autoFillGrade(input) {
    let marks = parseFloat(input.value);
    let select = input.nextElementSibling;

    if (!isNaN(marks)) {
        select.value = getGradeFromMarks(marks);
    }
}

// Clear marks
function clearMarks(select) {
    let input = select.previousElementSibling;
    input.value = "";
}

// SGPA
function calculateSGPA() {
    let rows = document.querySelectorAll(".row");

    let branch = document.getElementById("branch").value;
    let sem = document.getElementById("semester").value;

    let subjects = data[branch][sem];

    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach((row, i) => {
        let marks = row.querySelector("input").value;
        let grade = row.querySelector("select").value;

        let finalGrade;

        if (grade !== "") {
            finalGrade = grade;
        } else if (marks !== "") {
            finalGrade = getGradeFromMarks(parseFloat(marks));
        } else {
            return;
        }

        let gp = gradeMap[finalGrade];
        let credit = subjects[i].credit;

        totalCredits += credit;
        totalPoints += gp * credit;
    });

    let sgpa = totalPoints / totalCredits;

    document.getElementById("result").innerText =
        "SGPA: " + sgpa.toFixed(2);
}
