
let themeButton = document.getElementById("theme-button");
let signNowButton = document.getElementById('sign-now-button');

let count = 3;
// TODO: Query for button with an id "theme-button"
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  // Write your code to manipulate the DOM here
}


() => {
  let newSignature = document.createElement('p');
  let signaturesSection = document.getElementById('signatures-section');
  signaturesSection.appendChild(newSignature);

  
  count++;
  const newCounter = document.createElement('p');
  newCounter.id = 'counter';
  newCounter.innerHTML = `🖊️${count} people have signed this petition and support this cause`;
  signaturesSection.appendChild(newCounter);
};

console.log(signNowButton);
themeButton.addEventListener("click", toggleDarkMode);


// TODO: Complete validation form
const validateForm = () => {
  let containsErrors = false;
  const person = {
    name: '',
    hometown: '',
    email: ''
  };

  var petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!containsErrors) {

    person.name = petitionInputs[0].value;
    person.hometown = petitionInputs[2].value;

    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${person.name} supports this cause from ${person.hometown}`;
    let signaturesSection = document.getElementById('signatures-section');
    signaturesSection.appendChild(newSignature);
    const counterToRemove = document.getElementById('counter');
    if (counterToRemove) {
      counterToRemove.remove();
    } else {
      console.error('Counter not found');
    }
    toggleModal(person);
    count++; // Increment count for signatures
    
    const newCounter = document.createElement('p');
    newCounter.id = 'counter';
    newCounter.innerHTML = `🖊️${count} people have signed this petition and support this cause`;
    signaturesSection.appendChild(newCounter);

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    // Validation for petitionInputs[1] and person.hometown
    if (petitionInputs[1].value.length < 2) {
      containsErrors = true;
      petitionInputs[1].classList.add('error');
    } else {
      petitionInputs[1].classList.remove('error');
    }

    if (person.hometown.length < 2) {
      containsErrors = true;
    }
  }
};

// Attach click event listener to signNowButton for form validation


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

document.addEventListener('DOMContentLoaded', function() {
  let animationDelay = 500;
  let revealContainers = document.querySelectorAll('.reveal');
  revealContainers.forEach(function(container) {
    setTimeout(function() {
      container.classList.add('active');
    }, animationDelay);
    animationDelay += 2000;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const revealContainers = document.querySelectorAll('.reveal');

  revealContainers.forEach(function(container) {
    const observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        container.classList.add('active');
        observer.unobserve(container);
      }
    });

    observer.observe(container);
  });
});

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Call the reveal function initially
reveal();

// Call the reveal function on scroll
window.addEventListener('scroll', reveal);

// Function to handle reducing motion
function reduceMotion() {
  const animation = {
    transition: 'none', // Update the transition property
    distance: '8px', // Update the animation distance
    opacity: '1' // Update opacity
  };

  // Loop through revealableContainers
  const revealableContainers = document.querySelectorAll('.revealable');
  revealableContainers.forEach(container => {
    container.style.transition = animation.transition;
    container.style.transform = `translateY(${animation.distance})`;
    container.style.opacity = animation.opacity;
  });
}

// Event listener for the Reduce Motion button
const reduceMotionButton = document.getElementById('reduce-motion-button');
reduceMotionButton.addEventListener('click', reduceMotion);


// Assuming you have a variable containing the user's name
const userName = "John";

// Get the modal and the message element

const modalMessage = document.getElementById('modalMessage');

// Construct a message with the user's name
const niceMessage = `Hello, ${userName}! We're glad to have you here.`;


function toggleModal(person) {
  //intervalId and set it equal to a call to setInterval that calls scaleImage every half a second.
  var modal = document.querySelector('.modal');
  var modalContent = document.getElementById('thanks-modal-content');
  let intervalId = setInterval(scaleImage, 500);
  
  modal.style.display = "flex";
  
    modalContent.innerHTML = `Thank you, ${person.name}!`;

      // Hide the modal after 4 seconds
  
      setTimeout(() => {
        modal.style.display = 'none';
      //  clearInterval = intervalId;
      }, 4000);
    
}

  
  let scaleFactor = 1;
  let modalImage = document.getElementById('imgname'); // Replace '.modal-image' with your actual selector

  function scaleImage() {
    if (scaleFactor ==1) {
      scaleFactor = 0.8;
      modalImage.style.transform = `scale(${scaleFactor})`;
    } else {
      scaleFactor = 1;
      modalImage.style.transform = `scale(${scaleFactor})`;
    }
  }
signNowButton.addEventListener("click", validateForm);
