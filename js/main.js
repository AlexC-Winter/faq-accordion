const faqs = document.querySelectorAll(".qa-pairs");

faqs.forEach((faq) => {
  const button = faq.querySelector("h2");
  const image = faq.querySelector("h2 img");
  const paragraph = faq.querySelector("p");

  button.addEventListener("click", function() {
    if (paragraph.classList.contains("hidden")) {
      paragraph.classList.remove("hidden");
      image.src = "assets/images/icon-minus.svg";
    } else {
      paragraph.classList.add("hidden");
      image.src = "assets/images/icon-plus.svg";
    }
  });
});