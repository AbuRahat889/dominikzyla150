// Select Withdrawal Method
function selectMethod(element, method) {
    // Remove selected class from all cards
    document.querySelectorAll('.method-card').forEach(card => {
        card.classList.remove('selected');
        card.querySelector('.radio-circle').classList.remove('active');
    });

    // Add selected class to clicked card
    element.classList.add('selected');
    element.querySelector('.radio-circle').classList.add('active');

    console.log(`Selected withdrawal method: ${method}`);
}

// Delete payment method
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this payment method?')) {
            this.closest('.saved-method-card').remove();
            console.log('Payment method deleted');
        }
    });
});

// Edit payment method
document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Edit payment method');
        // Add your edit modal logic here
    });
});

// Add new account
document.querySelector('.add-btn').addEventListener('click', function() {
    console.log('Add new account clicked');
    // Add your add account modal logic here
});