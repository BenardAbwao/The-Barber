productsReviewForm.addEventListener('submit', (env) => {
    env.preventDefault();
    console.log(`review form ID: ${products.id}`)
    console.log('---------------------------------')
    if(productsReviewText.value !== ''){
        
        products.reviews.push(productsReviewText.value)
        patchBeer(products)
    } else{
        alert('Review is empty string!!')
    }
});