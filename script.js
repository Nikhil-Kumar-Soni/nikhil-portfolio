//for MEnu show
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', ()=>(navOptn)=> {
    navOptn.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-animation');
    
// Create an array of typing text
const typingTexts = [
'Web Developer   ',
'Data Analyst   ',
'Coder   ',
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
  typingAnimationElement.textContent += text[i];
  }, i * 200); // Increase the delay to slow down the typing animation
}

// Once the animation is complete, reset the text and start over
setTimeout(() => {
  typingAnimationElement.textContent = '';
  playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}, text.length * 200);
}
// Start the typing animation loop
playTypingAnimation(typingTexts[0]);


// for skill line chart
window.onload = function() {
    var fillData = [
      { id: 'fill1', width: '90%' },
      { id: 'fill2', width: '85%' },
      { id: 'fill3', width: '90%' },
      { id: 'fill4', width: '85%' },
      { id: 'fill5', width: '90%' }
    ];
  
    fillData.forEach(function(item) {
      var fillElement = document.getElementById(item.id);
      fillElement.style.width = item.width;
    });
  };


//for line graph
// const ctx = document.getElementById('courseChart').getContext('2d');
// const courseChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['SQL', 'React.js', 'Data Visualization', 'Problems solving', 'MS-Office'],
//         datasets: [{
//             label: 'Skills',
//             data: [90, 85, 85, 80, 95], // Corresponding percentages for each course
//             dataColor:'#ffbd39',
//             labelsColor:'#ffbd39',
//             labelColor:'#ffbd39',
//             borderColor: '#ffbd39',
//             backgroundColor: '#0b0a04',
//             borderWidth: 2,
//             fill: true,
//             tension: 0.3
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 100
//             }
//         }
//     }
// });


// Projects counter
let count = 1;
const interval = 300; // 0.3 seconds in milliseconds

const counting = setInterval(function() {
    if (count <= 10) {
        document.getElementById('counter').innerHTML = count; // Update the counter on the webpage
        count++;
    } else {
        clearInterval(counting); // Stop the loop once it reaches 10
        document.getElementById('counter').innerHTML = "10";
    }
}, interval);