let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

let name = ""
let phone = ""
let e-mail = ""

let items = {
    MS: 0,
    RK: 0,
    KK: 0,
    VA: 0
}

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Москва - Санкт-Петербург!")
        item = "MS"
        items['MS'] += 1
        update_orders()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Ростов - Краснодар!")
        item = "RK"
        items['RK'] += 1
        update_orders()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Кисловодск - Краснодар!")
        item = "KK"
        items['KK'] += 1
        update_orders()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Волгоград - Адлер!")
        item = "VA"
        items['VA'] += 1
        update_orders()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

function update_orders() {
    usercard.innerHTML = "Ваши заказы: "
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}

tg.expand()