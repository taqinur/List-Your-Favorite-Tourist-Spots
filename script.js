(function(){

    'use strict';

const detailsForm= document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();

    const desName= event.target.elements['name'].value;
    const desLocation = event.target.elements['location'].value;
    const desPhoto= event.target.elements['photo'].value;
    const desDesc= event.target.elements['description'].value;

    for (let i= 0; i<detailsForm.length; i++){
        detailsForm.elements[i].value="";

    }

    const destCard = createDestinationCard(desName, desLocation, desPhoto, desDesc);
    
    const wishlistContainer= document.getElementById('spots_container');
    if (wishlistContainer.children.length === 0){
        document.getElementById('title').innerHTML= "My Wishlist";
    }

    document.querySelector('#spots_container').appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description){
    const card = document.createElement('div');
    card.className = 'card';

    const img= document.createElement('img');
    img.setAttribute('alt', name);

    const constantPhoto = "images/signpost.jpg";

    if (photoURL.length === 0 ){
        img.setAttribute('src', constantPhoto);
    }
    else {
        img.setAttribute('src', photoURL);
    }
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className= "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);
    
    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText= location;
    cardBody.appendChild(cardSubtitle);

    if(description.length!= 0){
        const cardText= document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDelete = document.createElement("button");
    cardDelete.innerText= "Remove";

    cardDelete.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDelete);

    card.appendChild(cardBody);

    return card;

}

function removeDestination(event){
    const card= event.target.parentElement.parentElement;
    card.remove();
}

})();