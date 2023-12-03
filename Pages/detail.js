function postData(r){
    fetch()
}



const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
    var rating;
  star.addEventListener('click', (e)=> {
    rating = e.target.value;
    console.log(rating)
    document.getElementById('resultt').innerHTML = `You rated: ${rating} stars`;
  });
  postData(rating);
});