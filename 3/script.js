


let name = prompt('как вас зовут').trim()
name = name.toLowerCase()



if (name === 'Alex') {
    let account = prompt('password')
    if (account === '7777') {
        let money = prompt('how many days do you want to rent')
        if (money <= 10000) {


        } else {
            alert('not enough money')
        }
    } else {
        alert('error')
    }
} else {
    alert('get out')
}




let namee = prompt('what is your name?').trim()
namee = namee.toLowerCase()
if (namee[0] === 'a') {
    let age = prompt('how old are you?')
    if (age >= 18 != age >= 41) {
        let moneY = prompt('how many days do you have?')
        if (moneY >= 100) {
            let place = prompt('how many people want to come?')
            if (place <= 10) {
                alert('Welcome to our club')
            } else {
                alert('sorry leave the club')
            }

        } else {
            alert('sorry leave the club')
        }


    } else {
        alert('sorry leave the club')
    }


} else {
    alert('sorry leave the club')
}


