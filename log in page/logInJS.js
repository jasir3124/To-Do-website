

function valid(event){
    event.preventDefault()

    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passwordInput').value
    let validEmailRegex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let validPasswordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/

    if(email.match(validEmailRegex) && password.match(validPasswordRegex)){
        // TODO fix the link when the folders merge
        window.location.href = ('')
        document.getElementById('passwordInput').style.border = '1.5px solid green'
        document.getElementById('passwordError').style.display = 'none'
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        return true
    } else if((!email.match(validEmailRegex)) && password.match(validPasswordRegex)){
        document.getElementById('emailInput').style.border = '1.5px solid red'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid green'
        document.getElementById('passwordError').style.display = 'none'
        return false
    } else if(email.match(validEmailRegex) && (!password.match(validPasswordRegex))){
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        document.getElementById('passwordInput').style.border = '1.5px solid red'
        document.getElementById('passwordError').style.display = 'block'
        return false
    } else if((!email.match(validEmailRegex)) && (!password.match(validPasswordRegex))){
        document.getElementById('emailInput').style.border = '1.5px solid red'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid red'
        document.getElementById('passwordError').style.display = 'block'
        return false
     } else if (email.match(validEmailRegex) && password === ''){
        document.getElementById('passwordInput').style.border = '1.5px solid red'
        document.getElementById('passwordError').style.display = 'block'
        document.getElementById('emailInput').style.border = '1.5px solid green'
        document.getElementById('emailError').style.display = 'none'
        return false
     }else if (email === '' && password.match(validPasswordRegex)){
        document.getElementById('emailInput').style.border = '1.5px solid red'
        document.getElementById('emailError').style.display = 'block'
        document.getElementById('passwordInput').style.border = '1.5px solid red'
        document.getElementById('passwordError').style.display = 'block'
        return false
     } else if(email === '' && password === ''){
        document.getElementById('passwordInput').style.border = '1.5px solid red'
        document.getElementById('passwordError').style.display = 'block'
        document.getElementById('emailInput').style.border = '1.5px solid red'
        document.getElementById('emailError').style.display = 'block'
        return false
     }
} 


let username = document.getElementById('usernameInput').value