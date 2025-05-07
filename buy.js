// Get the modal and buttons
const orderModal = document.getElementById("orderModal");
const thankYouModal = document.getElementById("thankYouModal");
const buyNowBtn = document.getElementById("buyNowBtn");
const closeBtn = document.querySelector(".close");
const closeThankYou = document.getElementById("closeThankYou");
const orderForm = document.getElementById("orderForm");
const quantitySelector = document.querySelector(".quantity-selector");
const orderQuantity = document.getElementById("orderQuantity");

// Payment method toggle
const paymentMethods = document.querySelectorAll('input[name="payment"]');
const cardDetails = document.getElementById("cardDetails");

// When the user clicks the Buy Now button, open the modal 
buyNowBtn.onclick = function() {
    orderModal.style.display = "block";
    // Set the order quantity to match the selected quantity
    orderQuantity.value = quantitySelector.value;
}

// When the user clicks on (x), close the modal
closeBtn.onclick = function() {
    orderModal.style.display = "none";
}

// Close thank you modal
closeThankYou.onclick = function() {
    thankYouModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == orderModal) {
        orderModal.style.display = "none";
    }
    if (event.target == thankYouModal) {
        thankYouModal.style.display = "none";
    }
}

// Handle payment method selection
paymentMethods.forEach(method => {
    method.addEventListener('change', function() {
        if (this.value === "Credit Card") {
            cardDetails.style.display = "block";
        } else {
            cardDetails.style.display = "none";
        }
    });
});

// Handle form submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the data to your server
    // For this example, we'll just show the thank you message
    
    orderModal.style.display = "none";
    thankYouModal.style.display = "block";
    
    // Reset form
    orderForm.reset();
    cardDetails.style.display = "none";
});