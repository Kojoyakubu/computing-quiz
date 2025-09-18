const quizQuestions = [
    // ... all your questions from the previous version
    {
        question: "1. Which of the following is considered a key feature of fourth-generation computers?",
        options: ["Use of vacuum tubes", "Introduction of the microchip", "Large and bulky size", "Use of punch cards"],
        answer: "Introduction of the microchip"
    },
    {
        question: "2. What is a microchip primarily used for in fourth-generation computers?",
        options: ["Storing physical documents", "Cooling the computer", "Integrating complex circuits", "Powering external devices"],
        answer: "Integrating complex circuits"
    },
    {
        question: "3. The architecture of a processor is often referred to as its:",
        options: ["Operating system", "Central processing unit (CPU)", "Storage capacity", "User interface"],
        answer: "Central processing unit (CPU)"
    },
    {
        question: "4. Which of these is an example of an automatic input device?",
        options: ["Keyboard", "Mouse", "Barcode reader", "Microphone"],
        answer: "Barcode reader"
    },
    {
        question: "5. What is a key advantage of using a scanner?",
        options: ["It can be used for playing video games.", "It allows for the conversion of physical documents into digital files.", "It is a type of automatic output device.", "It is primarily used for typing text."],
        answer: "It allows for the conversion of physical documents into digital files."
    },
    {
        question: "6. Which output device would you use to create a large-scale, detailed blueprint or architectural drawing?",
        options: ["Data projector", "Pico projector", "Graphing plotter", "Multimedia projector"],
        answer: "Graphing plotter"
    },
    {
        question: "7. A pico projector is best known for its:",
        options: ["Large size and heavy weight.", "High brightness and long-distance projection.", "Portability and ability to connect to small devices.", "Use in professional movie theaters."],
        answer: "Portability and ability to connect to small devices."
    },
    {
        question: "8. Which of the following is a type of magnetic storage device?",
        options: ["Blu-ray Disc", "Solid-State Drive (SSD)", "Hard Disk Drive (HDD)", "CD-ROM"],
        answer: "Hard Disk Drive (HDD)"
    },
    {
        question: "9. A major difference between a CD-R and a CD-RW disc is that a CD-RW is:",
        options: ["Read-only.", "Faster to write data to.", "Not a type of optical disc.", "Rewritable, allowing you to erase and rewrite data."],
        answer: "Rewritable, allowing you to erase and rewrite data."
    },
    {
        question: "10. What is the main purpose of a hard drive's disk caching?",
        options: ["To increase the physical size of the disk.", "To temporarily store frequently accessed data for faster retrieval.", "To protect the hard drive from physical damage.", "To make the hard drive a portable device."],
        answer: "To temporarily store frequently accessed data for faster retrieval."
    },
    {
        question: "11. Which of the following is an example of a Read-Only optical disc?",
        options: ["DVD-RW", "CD-R", "BD-ROM", "DVD+R"],
        answer: "BD-ROM"
    },
    {
        question: "12. The Start screen and tiles are characteristic features of which operating system?",
        options: ["Windows XP", "Windows 7", "Windows 10", "Windows Vista"],
        answer: "Windows 10"
    },
    {
        question: "13. What feature allows a user to get a small preview of an open window by hovering over its icon on the taskbar?",
        options: ["Live tiles", "Preview thumbnails", "Taskbar peeking", "Desktop shortcuts"],
        answer: "Preview thumbnails"
    },
    {
        question: "14. What is the primary purpose of file management techniques?",
        options: ["To download new software.", "To organize and maintain files and folders.", "To protect a computer from viruses.", "To change the color of the screen."],
        answer: "To organize and maintain files and folders."
    },
    {
        question: "15. What is the purpose of a file extension?",
        options: ["It tells you the size of the file.", "It identifies the type of file and the program used to open it.", "It indicates the creation date of the file.", "It prevents the file from being moved."],
        answer: "It identifies the type of file and the program used to open it."
    },
    {
        question: "16. What does a 'Read-only' permission level for a file or folder mean?",
        options: ["The user can delete and modify the content.", "The user can only view the content but cannot change it.", "The user can change the file name.", "The user can only execute the file."],
        answer: "The user can only view the content but cannot change it."
    },
    {
        question: "17. Which of the following is not an example of a word processing software?",
        options: ["Microsoft Word", "Google Docs", "Adobe Photoshop", "LibreOffice Writer"],
        answer: "Adobe Photoshop"
    },
    {
        question: "18. What is a primary advantage of using word processing software?",
        options: ["It is used to create complex mathematical formulas.", "It allows for the creation, editing, and formatting of text documents.", "It is primarily used for creating presentations.", "It is a type of web browser."],
        answer: "It allows for the creation, editing, and formatting of text documents."
    },
    {
        question: "19. Which key or function would you use to delete a word to the left of your cursor?",
        options: ["Enter", "Backspace", "Tab", "Shift"],
        answer: "Backspace"
    },
    {
        question: "20. The 'overtype' option in a word processor allows you to:",
        options: ["Insert new text without affecting existing text.", "Replace existing text as you type.", "Only type over images.", "Change the font style."],
        answer: "Replace existing text as you type."
    },
    {
        question: "21. What is the keyboard shortcut to undo the last action in most word processors?",
        options: ["Ctrl + S", "Ctrl + Z", "Ctrl + C", "Ctrl + V"],
        answer: "Ctrl + Z"
    },
    {
        question: "22. The 'Find and Replace' tool is typically located under which tab in MS-Word?",
        options: ["Insert", "View", "Home", "Page Layout"],
        answer: "Home"
    },
    {
        question: "23. Which tool would you use to automatically check for and correct spelling errors in a document?",
        options: ["Thesaurus", "Spell check", "Word count", "Language setting"],
        answer: "Spell check"
    },
    {
        question: "24. A flowchart is a type of diagram that represents an:",
        options: ["Artistic drawing.", "Algorithm or process.", "Financial report.", "Organizational chart."],
        answer: "Algorithm or process."
    },
    {
        question: "25. What is an algorithm?",
        options: ["A type of computer virus.", "A set of rules or instructions to be followed in calculations or other problem-solving operations.", "A piece of hardware.", "A specific programming language."],
        answer: "A set of rules or instructions to be followed in calculations or other problem-solving operations."
    },
    {
        question: "26. Which of the following is a characteristic of fourth-generation computers?",
        options: ["Magnetic drum for main memory.", "Large, floor-sized computers.", "Use of the Internet.", "Relied on machine language."],
        answer: "Use of the Internet."
    },
    {
        question: "27. The development of the microprocessor in the fourth generation led to the creation of:",
        options: ["Vacuum tubes", "Mainframe computers", "Personal computers (PCs)", "Punched card readers"],
        answer: "Personal computers (PCs)"
    },
    {
        question: "28. Which of the following is considered an input device?",
        options: ["Speakers", "Monitor", "Barcode reader", "Printer"],
        answer: "Barcode reader"
    },
    {
        question: "29. The main difference between a manual and an automatic input device is:",
        options: ["Manual devices are cheaper.", "Automatic devices do not require human interaction to capture data.", "Manual devices are always faster.", "Automatic devices are used only for drawing."],
        answer: "Automatic devices do not require human interaction to capture data."
    },
    {
        question: "30. A multimedia projector is an output device used for:",
        options: ["Printing high-quality photos.", "Displaying video, images, and presentations on a large screen.", "Recording sound.", "Scanning documents."],
        answer: "Displaying video, images, and presentations on a large screen."
    },
    {
        question: "31. What is a potential disadvantage of an external hard drive?",
        options: ["They are typically very small.", "They are vulnerable to physical damage and data loss.", "They are not portable.", "They have very low storage capacity."],
        answer: "They are vulnerable to physical damage and data loss."
    },
    {
        question: "32. The term 'HDD speed' often refers to:",
        options: ["How fast the drive spins (RPM).", "The number of photos it can store.", "The physical size of the drive.", "The color of the drive's casing."],
        answer: "How fast the drive spins (RPM)."
    },
    {
        question: "33. Which type of optical disc is used to permanently save data that cannot be altered or erased?",
        options: ["CD-RW", "DVD+RW", "BD-R", "DVD-ROM"],
        answer: "BD-R"
    },
    {
        question: "34. Windows 'Taskbar buttons' are used to:",
        options: ["Change the desktop wallpaper.", "Access quick settings like Wi-Fi.", "Launch and switch between open applications.", "Shut down the computer."],
        answer: "Launch and switch between open applications."
    },
    {
        question: "35. The 'Tiles' on the Windows Start screen are most similar in function to:",
        options: ["Traditional desktop shortcuts.", "Control panel settings.", "The Recycle Bin.", "Computer's internal files."],
        answer: "Traditional desktop shortcuts."
    },
    {
        question: "36. In file management, a subfolder is:",
        options: ["A type of file extension.", "A folder located inside another folder.", "A new hard drive.", "A special kind of user account."],
        answer: "A folder located inside another folder."
    },
    {
        question: "37. A computer user account with administrator privileges can:",
        options: ["Only view files.", "Read and write files only.", "Install software, change system settings, and manage other user accounts.", "Access the internet only."],
        answer: "Install software, change system settings, and manage other user accounts."
    },
    {
        question: "38. Which of these is a common naming convention for files?",
        options: ["Using as many special characters as possible.", "Leaving spaces and using very long names.", "Using descriptive, concise names without special characters.", "Naming all files 'document1.'"],
        answer: "Using descriptive, concise names without special characters."
    },
    {
        question: "39. The ability to automatically update a document's content is a feature of:",
        options: ["All modern word processors.", "Only older versions of software.", "Only hardware devices.", "Only web browsers."],
        answer: "All modern word processors."
    },
    {
        question: "40. What is the primary function of the 'Insert' key on a keyboard?",
        options: ["To enter a new line of text.", "To toggle between insert and overtype modes.", "To save a document.", "To paste copied text."],
        answer: "To toggle between insert and overtype modes."
    },
    {
        question: "41. What is the purpose of the 'Spelling and Grammar' tool?",
        options: ["To change the font color.", "To check for grammatical and typographical errors.", "To translate a document into another language.", "To change the page orientation."],
        answer: "To check for grammatical and typographical errors."
    },
    {
        question: "42. Which of the following is typically a part of an algorithm?",
        options: ["A list of random words.", "A sequence of specific steps.", "A picture of a famous person.", "A type of computer virus."],
        answer: "A sequence of specific steps."
    },
    {
        question: "43. Which shape in a flowchart typically represents a starting or ending point?",
        options: ["A rectangle", "A diamond", "An oval", "An arrow"],
        answer: "An oval"
    },
    {
        question: "44. Which of the following describes the 'selection' of text in a word processor?",
        options: ["Deleting it completely.", "Highlighting it with the mouse or keyboard.", "Changing its color.", "Printing the document."],
        answer: "Highlighting it with the mouse or keyboard."
    },
    {
        question: "45. The 'language setting' in a word processor primarily affects:",
        options: ["The file size.", "The type of font used.", "The spell check and grammar rules applied.", "The speed of the computer."],
        answer: "The spell check and grammar rules applied."
    },
    {
        question: "46. What is the difference between a DVD-R and a DVD+R?",
        options: ["They are completely different technologies and not compatible.", "The 'R' stands for 'rewritable' on one and 'read-only' on the other.", "They use different formatting methods but are both recordable once.", "One is for movies and the other is for data."],
        answer: "They use different formatting methods but are both recordable once."
    },
    {
        question: "47. What is the purpose of temporal peeking into a window on the taskbar?",
        options: ["To close the window permanently.", "To get a quick, temporary look at the window's content.", "To change the window's size.", "To make the window full-screen."],
        answer: "To get a quick, temporary look at the window's content."
    },
    {
        question: "48. A 'data projector' is used to:",
        options: ["Project data from a computer onto a screen or wall.", "Store large amounts of data.", "Scan documents for data.", "Create 3D models."],
        answer: "Project data from a computer onto a screen or wall."
    },
    {
        question: "49. What is the main purpose of a user account on a computer?",
        options: ["To download free software.", "To provide a personalized and secure environment for each user.", "To improve the computer's speed.", "To back up all files."],
        answer: "To provide a personalized and secure environment for each user."
    },
    {
        question: "50. Which of these devices is both an input and output device?",
        options: ["Keyboard", "Monitor", "All-in-one printer (with scanner and fax)", "Mouse"],
        answer: "All-in-one printer (with scanner and fax)"
    }
];

const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score-display');
const scoreValue = document.getElementById('score-value');
const modal = document.getElementById('modal');
const modalOkBtn = document.getElementById('modal-ok-btn');

// New UI Elements
const landingPage = document.getElementById('landing-page');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');

let timeLeft = 3300;
let timerInterval;

function getPerformanceData(score) {
    if (score >= 45) {
        return { message: "Excellent performance! Keep up the great work. 🎉", className: "excellent-message" };
    } else if (score >= 35) {
        return { message: "Great job! You've done very well, but there's room for improvement. 💪", className: "great-message" };
    } else if (score >= 25) {
        return { message: "You're on the right track! Review the incorrect answers to improve. 👍", className: "good-message" };
    } else {
        return { message: "Don't worry, every expert was once a beginner. Keep learning! 📚", className: "needs-work-message" };
    }
}

function renderQuestions() {
    const letters = ['a', 'b', 'c', 'd'];
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <div class="options">
                ${q.options.map((option, optionIndex) => `
                    <label>
                        <input type="radio" name="question-${index}" value="${option}">
                        <span>${letters[optionIndex]}) ${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        quizForm.appendChild(questionDiv);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitQuiz();
        }
    }, 1000);
}

function disableQuiz() {
    const inputs = quizForm.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);
    submitBtn.disabled = true;
}

function showResults() {
    let score = 0;
    const reviewList = document.createElement('div');
    reviewList.classList.add('review-list');
    reviewList.innerHTML = '<h2>Review Your Answers</h2>';

    quizQuestions.forEach((q, index) => {
        const formElements = quizForm.elements;
        const selectedOption = formElements[`question-${index}`].value;
        const isCorrect = selectedOption === q.answer;

        if (isCorrect) {
            score++;
        }

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item', isCorrect ? 'correct' : 'incorrect');
        reviewItem.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <p>Your Answer: <span class="user-answer">${selectedOption || 'No answer selected'}</span></p>
            ${!isCorrect ? `<p>Correct Answer: <span class="correct-answer">${q.answer}</span></p>` : ''}
        `;
        reviewList.appendChild(reviewItem);
    });

    scoreValue.textContent = `${score}/${quizQuestions.length}`;
    scoreDisplay.style.opacity = '1';

    const performanceData = getPerformanceData(score);
    const performanceMessageElement = document.createElement('div');
    performanceMessageElement.classList.add('additional-message', performanceData.className);
    performanceMessageElement.textContent = performanceData.message;

    const container = document.querySelector('#quiz-container');
    container.insertBefore(resultsDiv, container.firstChild);
    container.insertBefore(performanceMessageElement, resultsDiv.nextSibling);
    container.insertBefore(reviewList, performanceMessageElement.nextSibling);

    resultsDiv.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
}

function autoSubmitQuiz() {
    disableQuiz();
    showResults();
    modal.classList.add('show-modal');
}

function manualSubmitQuiz(event) {
    event.preventDefault();
    clearInterval(timerInterval);
    disableQuiz();
    showResults();
    modal.classList.add('show-modal');
}

submitBtn.addEventListener('click', manualSubmitQuiz);
modalOkBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

startBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    quizContainer.classList.add('fade-in');
    startTimer();
});

document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
});