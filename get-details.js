"use strict";

var request = new XMLHttpRequest()

request.open('GET', 'https://codeforces.com/api/user.info?handles=raghuvanshraj', true)

request.onload = function() {
    var result = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        var rank = result.result[0].rank
        var rankModified = ""
        for (var word of rank.split(' ')) {
            rankModified += word.charAt(0).toUpperCase() + word.substring(1) + " "
        }
        console.log(rankModified)
        document.getElementById("codeforces-details").innerHTML = "Rank: " + result.result[0].rank.charAt(0).toUpperCase() + result.result[0].rank.substring(1) + "<br>Rating: " + result.result[0].rating
    } else {
        console.log('error')
    }
}

request.send()