
export const timeBetween = (date1, date2) => {
    let seconds = 0
    let minutes = 0
    let hours = 0
    let days = 0
    let months = 0

    seconds = Math.floor((date2 - date1) / 1000)
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60)
        seconds = seconds - minutes * 60

        if (minutes >= 60) {
            hours = Math.floor(minutes / 60)
            minutes -= hours * 60

            if (hours >= 24) {
                days = Math.floor(hours / 24)
                hours -= days * 24

                if (days >= 30) {
                    months = Math.floor(days / 30)
                    days -= months * 30
                }
            }
        }
    }

    let result = `${months ? (months >= 10 ? months : '0' + months) + ' tháng' : ''}
    ${days >= 10 ? days : `0${days}`} ngày
    ${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`

    return {
        seconds,
        minutes,
        hours,
        days,
        months,
        resultString: result
    }

}
