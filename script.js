/*================== SWIPER JS ====================*/
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*=============== TOGGLE MENU ===============*/
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

/*=============== DARK/ LIGHT MODE ===============*/
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

/*=============== CERTIFICATES MODAL ===============*/
// Get all the swiper images
const swiperImages = document.querySelectorAll('.certificate-img');

// Get the modal container
const modal = document.getElementById('modal');

// Get the modal content container
const modalContent = document.getElementById('modal-content');

// Get the modal close button
const modalCloseButton = document.getElementById('modal-close-button');

// Loop through all the swiper images
swiperImages.forEach((image) => {
  // Add a click event listener to each image
  image.addEventListener('click', () => {
    // Get the ID of the modal content from the image's data attribute
    const modalContentId = image.dataset.modalContent;
    // Get the modal content element
    const content = document.getElementById(modalContentId);
    // Show the modal and modal content
    modal.style.display = 'flex';
    content.style.display = 'block';
    modalContent.innerHTML = content.innerHTML;
  });
});

// Add a click event listener to the modal close button
modalCloseButton.addEventListener('click', () => {
  // Hide the modal and modal content
  modal.style.display = 'none';
  modalContent.innerHTML = '';
});


/*============================= EMAIL JS ============================*/
const contactForm = document.querySelector('#contact-form'),
  contactName = document.querySelector('#contact-name'),
  contactEmail = document.querySelector('#contact-email'),
  contactText = document.querySelector('#contact-text'),
  contactMessage = document.querySelector('#contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  //Check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactText.value === '') {
    //Add and remove color
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');

    //Show message
    contactMessage.textContent = 'Write all the input fields 📩';
  } else {
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_x4nxyrh', 'template_5kpf1tbb', '#contact-form', '-8BfXJEQcEY73A8Wa')
      .then(() => {
        //Show message and add color
        contactMessage.classList.add('color-blue');
        contactMessage.textContent = 'Message sent ✅';

        //Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000)
      }, (error) => {
        alert('OOPS! SOMETHING HAS FAILED...', error);
      });

    //To clear the input field
    contactName.value = '';
    contactEmail.value = '';
    contactText.value = '';
  }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`header`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home`);
sr.reveal(`.social`, `.home-text`, {
  delay: 100,
  origin: "left",
});

sr.reveal(`.home-images`, {
  delay: 100,
  origin: "right",
});

sr.reveal(`.about-img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about-text, .about-btn`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skill-box`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.certificates-content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.card-wrap`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.contact-info, .contact-title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact-form, .contact-title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`footer`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});