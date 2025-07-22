document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton")
    startButton.addEventListener("click", function () {
        const startPopUp = document.querySelector(".startPopUp")
        if (startPopUp.style.marginTop === "1200px") {
            startPopUp.style.marginTop = "170px"
            startPopUp.style.transition = "0.5s all ease"
        } else {
            startPopUp.style.marginTop = "1200px"
            startPopUp.style.transition = "0.5s all ease"
        }
    })

    const dateTime = document.querySelector(".dateTime")
    function currentDateTime() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const now = new Date()
        const dayName = days[now.getDay()]

        const date = now.toLocaleDateString()
        const time = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).toUpperCase()

        dateTime.innerHTML = `<p>${time}</p>
                <p>${dayName}, ${date}</p>`
    }
    currentDateTime()
    setInterval(currentDateTime, 1000)
})