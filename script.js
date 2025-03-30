let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

let price = 0
let name = ""
let phone = ""
let e-mail = ""

let items = {
    MS: 0,
    RK: 0,
    KK: 0,
    VA: 0
}

let usercard = document.querySelector('#usercard')
let username = document.querySelector('#user-name')
let userphone = document.querySelector('#user-phone')
let useremail = document.querySelector('#user-email')

function create_li(text) {
    let li = document.createElement("li")
    li.innerHTML = Text
    usercard.appendChild(li)
}

btn1.onclick = () => {
    items['MS'] += 1
    price += 100
    update_orders()
}

btn2.onclick = () => {
    items['RK'] += 1
    price += 50
    update_orders()
}

btn3.onclick = () => {
    items['KK'] += 1
    price += 20
    update_orders()
}

btn4.onclick = () => {
    items['VA'] += 1
    price += 30
    update_orders()
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

function update_orders() {
    usercard.innerHTML = "Ваши заказы: "
    if (name != "") {
        create_li("имя: " + name)
    }
    if (phone != "") {
        create_li("телефон: " + phone)
    }
    if (email != "") {
        create_li("почта: " + email)
    }
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}


username.onchange() = () => {
    name = username.value
}
userphone.onchange() = () => {
    phone = userphone.value
}
useremail.onchange() = () => {
    email = useremail.value
}

tg.expand()

Telegram.WebApp.onEvent("mainButtonClicked", function) {
    result = ""
    if (name != "") {
        create_li("имя: " + name)
    }
    if (phone != "") {
        create_li("телефон: " + phone)
    }
    if (email != "") {
        create_li("почта: " + email)
    }

    result += "ваши заказы: \n"
    for (let item in items) {
        if (items[item] != 0) {
            result += item + " : " + items[items] + "\n"
        }
    }
    result += "\n\n с вас " + price + "$"
}