
function scrollToLeft() {
  let container = document.querySelector(".food-wrapper");
  container.scrollTo({
      left: 0, // Move directly to extreme left
      behavior: "smooth"
  });

  // Ensure scrollLeft is properly reset
  setTimeout(() => {
      container.scrollLeft = 0;
  }, 300);
}

function scrollToRight() {
  let container = document.querySelector(".food-wrapper");
  container.scrollTo({
      left: container.scrollWidth - container.clientWidth, // Move directly to extreme right
      behavior: "smooth"
  });
}

function scrollGrocery(direction) {
  let container = document.querySelector(".grocery-items");
  let scrollAmount = container.clientWidth; // Scroll full width

  if (direction === "right") {
      container.scrollLeft += scrollAmount;
  } else {
      container.scrollLeft -= scrollAmount;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("grocery-scroll");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  const scrollAmount = 800; // Scrolling Speed

  scrollLeftBtn.addEventListener("click", function () {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", function () {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.getElementById("signInBtn");
  const loginPanel = document.getElementById("loginPanel");
  const closeLogin = document.getElementById("closeLogin");
  const showSignup = document.getElementById("showSignup");

  const signupPanel = document.getElementById("signupPanel");
  const closeSignup = document.getElementById("closeSignup");
  const showLogin = document.getElementById("showLogin");

  // Show login panel
  signInBtn.addEventListener("click", function () {
      loginPanel.classList.add("active");
  });

  // Close login panel
  closeLogin.addEventListener("click", function () {
      loginPanel.classList.remove("active");
  });

  // Show signup panel and hide login
  showSignup.addEventListener("click", function (event) {
      event.preventDefault();
      loginPanel.classList.remove("active");
      signupPanel.classList.add("active");
  });

  // Close signup panel
  closeSignup.addEventListener("click", function () {
      signupPanel.classList.remove("active");
  });

  // Show login panel and hide signup
  showLogin.addEventListener("click", function (event) {
      event.preventDefault();
      signupPanel.classList.remove("active");
      loginPanel.classList.add("active");
  });
});
