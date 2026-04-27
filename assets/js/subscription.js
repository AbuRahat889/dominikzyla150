function openModal(modalType, packageName = null, price = null) {
  closeAllModals();

  if (modalType === "purchaseConfirmation") {
    if (packageName) {
      document.getElementById("confirmPackageName").textContent =
        packageName + " Package";
      const priceValue = price.replace("$", "");
      document.getElementById("confirmPackagePrice").textContent =
        priceValue + ".00 EUR";
      document.getElementById("confirmTotal").textContent =
        priceValue + ".00 EUR";
    }
    document
      .getElementById("purchaseConfirmationModal")
      .classList.add("active");
  } else if (modalType === "paymentMethod") {
    document.getElementById("paymentMethodModal").classList.add("active");
  } else if (modalType === "creditCardPayment") {
    document.getElementById("creditCardPaymentModal").classList.add("active");
  } else if (modalType === "cryptoPayment") {
    document.getElementById("cryptoPaymentModal").classList.add("active");
  }
}

function closeModal(modalType) {
  if (modalType === "purchaseConfirmation") {
    document
      .getElementById("purchaseConfirmationModal")
      .classList.remove("active");
  } else if (modalType === "paymentMethod") {
    document.getElementById("paymentMethodModal").classList.remove("active");
  } else if (modalType === "creditCardPayment") {
    document
      .getElementById("creditCardPaymentModal")
      .classList.remove("active");
  } else if (modalType === "cryptoPayment") {
    document.getElementById("cryptoPaymentModal").classList.remove("active");
  }
}

function closeAllModals() {
  document
    .getElementById("purchaseConfirmationModal")
    .classList.remove("active");
  document.getElementById("paymentMethodModal").classList.remove("active");
  document.getElementById("creditCardPaymentModal").classList.remove("active");
  document.getElementById("cryptoPaymentModal").classList.remove("active");
}

function selectPaymentMethod(element, method) {
  document.querySelectorAll(".method-option").forEach((el) => {
    el.classList.remove("selected");
  });
  element.classList.add("selected");
}

function proceedWithPayment() {
  const selectedMethod = document.querySelector(".method-option.selected");
  if (
    selectedMethod
      .querySelector(".method-name")
      .textContent.includes("Credit Card")
  ) {
    openModal("creditCardPayment");
  } else {
    openModal("cryptoPayment");
  }
}

function toggleRules() {
  var rulesList = document.getElementById("rulesList");
  rulesList.classList.toggle("open");
}

// Make sure the function is globally accessible
window.toggleRules = toggleRules;

// Close modals when clicking overlay
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    if (e.target === this) {
      closeAllModals();
    }
  });
});
