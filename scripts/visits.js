const reviewsDisplay = document.querySelector("#reviews");

let numReviews = Number(window.localStorage.getItem("numberOfReviews")) || 0;

if (numReviews !== 0) {
    if (numReviews > 1) {
        reviewsDisplay.textContent = `You have made ${numReviews} reviews`

    } else {
        reviewsDisplay.textContent = `You have made 1 review`
        
    }
} else  {
    reviewsDisplay.textContent = "This is your first review!"
}

numReviews++;

localStorage.setItem("numberOfReviews", numReviews)