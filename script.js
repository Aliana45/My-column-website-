// Mobile navigation

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

  });
}


// Close the mobile menu after choosing a page

const navigationLinks = document.querySelectorAll("#navigation a");

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (navigation) {
      navigation.classList.remove("open");
    }

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }

  });

});
