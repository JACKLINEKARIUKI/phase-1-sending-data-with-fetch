// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(data => {
        const user = document.querySelector('body');
        user.innerHTML = `<h1>${data.id}</h1>`;
    })
    .catch((errorObj) => {
        const error = document.querySelector('body');
        error.innerHTML = `<h1>${errorObj.message}</h1>`;
      });
}