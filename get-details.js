"use strict";

var request = new XMLHttpRequest()

request.open('GET', 'https://codeforces.com/api/user.info?handles=raghuvanshraj', true)

request.onload = function() {
    var result = JSON.parse(this.response)
    // console.log(request.status)
    if (request.status >= 200 && request.status < 400) {
        // console.log(result.result[0].rank)
        // console.log(result.result[0].rating)
        document.getElementById("codeforces-details").innerHTML = "Rank: " + result.result[0].rank.charAt(0).toUpperCase() + result.result[0].rank.substring(1) + "<br>Rating: " + result.result[0].rating
    } else {
        console.log('error')
    }
}

request.send()