const faqs = document.querySelectorAll(".ques");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        const ans = faq.nextElementSibling; 
        const icon = faq.querySelector("i"); // Select the i element inside the question
        // Select the corresponding answer div
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
            ans.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";

        } else {
            faq.classList.add("active");
            ans.style.maxHeight = ans.scrollHeight + "px";
            icon.style.transform = "rotate(45deg)";

        }
    });
});
