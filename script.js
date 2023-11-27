document.addEventListener("DOMContentLoaded", function () {
  const billingToggle = document.getElementById("billing-toggle");
  const monthlyLabel = document.querySelector(".monthly");
  const yearlyLabel = document.querySelector(".yearly");
  const monthlyLabels = document.querySelectorAll("td[monthly]");

  billingToggle.addEventListener("change", function () {
    const isYearly = billingToggle.checked;

    if (isYearly) {
      monthlyLabel.style.opacity = 0;
      yearlyLabel.style.opacity = 1;
    } else {
      monthlyLabel.style.opacity = 1;
      yearlyLabel.style.opacity = 0;
    }

    updatePrices(isYearly);
  });

  function updatePrices(isYearly) {
    const basicPrice = isYearly ? "$99.99" : "$9.99";
    const standardPrice = isYearly ? "$199.99" : "$19.99";
    const premiumPrice = isYearly ? "$299.99" : "$29.99";
    const quantityCheck = isYearly ? "Щорічно" : "Щомісячно";

    monthlyLabels.forEach(function (label) {
      label.textContent = quantityCheck;
    });

    document.querySelector('td[data-monthly="$9.99"]').textContent = basicPrice;
    document.querySelector('td[data-monthly="$19.99"]').textContent =
      standardPrice;
    document.querySelector('td[data-monthly="$29.99"]').textContent =
      premiumPrice;
    document.querySelector('td[monthly="Щомісячно"]').textContent =
      quantityCheck;
  }
});
