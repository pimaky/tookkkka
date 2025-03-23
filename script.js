let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Москва - Санкт-Петербург!")
        item = "Москва - Санкт-Петербург"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Ростов - Краснодар!")
        item = "Ростов - Краснодар"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Кисловодск - Краснодар!")
        item = "Кисловодск - Краснодар"
        tg.MainButton.show()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("вы выбрали Волгоград - Адлер!")
        item = "Волгоград - Адлер"
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

tg.expand()