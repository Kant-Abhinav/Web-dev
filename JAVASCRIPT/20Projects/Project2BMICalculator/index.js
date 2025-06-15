const form = document.querySelector('form')

//const height = parseInt(document.querySelector('#height'));
//This case is wrong as it will give us an empty value i.e a value before submitting
form.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height<0 || isNaN(height)){
results.innerHTML = `Please give a valid height ${height}`;
}

else if (weight === '' || weight<0 || isNaN(weight)){
results.innerHTML = `Please give a valid height ${weight}`;
}
else {
    results.innerHTML = (weight/((height*height)/10000)).toFixed(2);
    value = results.innerHTML;

}

})