var today = new Date()
var day= today.getDate()
var month= today.getMonth() + 1
var year = today.getFullYear()

document.getElementsByClassName("day")[0].innerHTML = day
document.getElementsByClassName("month")[0].innerHTML = month
document.getElementsByClassName("year")[0].innerHTML = year


setInterval(setTime, 1000)

// https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
// https://gomakethings.com/javascript-selectors-in-html/
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setTime(){
    // https://tylermcginnis.com/var-let-const/
    const date= new Date()
    date.toLocaleDateString()
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const secondAngle = second * 6;
    const minuteAngle = (minute * 6) + (second * 0.1);
    const hourAngle = (date.getHours()%12 * 30) + (minute * 0.5);
    setRotation(hourHand, hourAngle)
    setRotation(minuteHand, minuteAngle)
    setRotation(secondHand, secondAngle)
}

function setRotation(element, value){
    element.style.setProperty('--rotation', value)
}

