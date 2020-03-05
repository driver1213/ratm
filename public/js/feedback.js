

//jquery

//find form 
let form = document.querySelector('.feedback-form');


//add event listener to dom element
form.addEventListener('submit', (e)=>{

    e.preventDefault();

    //retrieve valuse from form
    let name = document.querySelector('#feedback-form-name');
    let title = document.querySelector('#feedback-form-title');
    let message = document.querySelector('#feedback-form-message');

    fetch('/api', {

        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: {
            "name": name.value,
            "title": title.value,
            "message": message.value
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((msgObj)=>{
        console.log(msgObj)
    })

})