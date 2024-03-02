/*
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Marie Angelika Maglinte
*/

// In your profile page, the name of the picture should appear after 10 seconds.
setTimeout(function() {
    document.querySelector('.image-name').style.display = 'block';
}, 10000); 

// The footer of your page should include current date and copy right information.
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);


// Instructions:
// 1. Create a single personal profile page about yourself with any kind of style. This page should include 
// one picture, 1 or 2 paragraph, and header with navigation bar and footer. (10 points)
// (This home page should be named as index.html)
// • The navigation bar will be used to create a link to other pages that you will create for the 
// other questions. 
// • The footer of your page should include current date and copy right information.
// 2. In your profile page, the name of the picture should appear after 10 seconds.