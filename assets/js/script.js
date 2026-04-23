/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// Highlight active button and handle content display
// var btnContainer = document.getElementById("gf-BtnContainer");
// var btns = btnContainer.getElementsByClassName("gf-btn");

// // Initialize with Bollywood data showing by default
// document.addEventListener("DOMContentLoaded", function () {
//     // Set the first button (Bollywood) as active
//     btns[0].classList.add("gf-btn-active");

//     // Show the default data for Bollywood
//     filterSelection("normal");
//     filterContent("bollywood");
// });

// Handle button clicks for visibility of headings and images
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         // Remove active class from the currently active button
//         var current = document.getElementsByClassName("gf-btn-active");
//         if (current.length > 0) {
//             current[0].classList.remove("gf-btn-active");
//         }
//         // Add active class to the clicked button
//         this.classList.add("gf-btn-active");

//         // Determine which leaderboard to show based on button selection
//         if (this === btns[0]) {  // First button (Bollywood)
//             filterSelection("normal");
//             filterContent("bollywood");
//         } else if (this === btns[1]) {  // Second button (Hollywood)
//             filterSelection("multie");
//             filterContent("hollywood");
//         }
//     });
// }

// // Function to show/hide headings and leaderboards
// function filterSelection(option) {
//     // Get elements
//     const normalLeaderboard = document.querySelector('.normal-leaderboard');
//     const multieLeaderboard = document.querySelector('.multie-leaderboard');
//     const normalHeading = document.querySelector('.normal-heading');
//     const multieHeading = document.querySelector('.multie-heading');

//     // Hide all elements first
//     normalLeaderboard.style.display = 'none';
//     multieLeaderboard.style.display = 'none';
//     normalHeading.style.display = 'none';
//     multieHeading.style.display = 'none';

//     // Show elements based on the selected option
//     if (option === 'normal') {
//         normalLeaderboard.style.display = 'block';
//         normalHeading.style.display = 'block';
//     } else if (option === 'multie') {
//         multieLeaderboard.style.display = 'block';
//         multieHeading.style.display = 'block';
//     }
// }

// Function to filter content based on Bollywood or Hollywood selection
function filterContent(c) {
    var x, i;
    x = document.getElementsByClassName("gf-column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Helper functions to add and remove classes for filtering
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

