// Simple alert for form submission
document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  });
  function goToField1Page() {
    window.location.href = "field1-details.html";
  }
  function goToField2Page() {
    window.location.href = "field2-details.html";
  }