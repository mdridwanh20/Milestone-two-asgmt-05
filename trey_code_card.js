
document.getElementById('addCardBtn').addEventListener('click', function() {
    // Clear the container before adding a new card
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';  // This clears any existing content

    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Create title element
        const title = document.createElement('h2');
        title.textContent = 'Dynamic Card';

        // Create description element
        const description = document.createElement('p');
        description.textContent = 'This is a dynamically created card using DOM manipulation.';

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Card';
        removeBtn.classList.add('remove-btn');

    // Append title, description, and button to the card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(removeBtn);

    // Append card to the card container
    cardContainer.appendChild(card);

    // Remove card on button click
    removeBtn.addEventListener('click', function() {
        cardContainer.innerHTML = '';  // Clear the card when clicked
    });

});
