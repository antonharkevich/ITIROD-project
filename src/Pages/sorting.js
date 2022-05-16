function sortByRapid(arr) {
    arr.sort((a, b) => a.rate_rapid > b.rate_rapid ? -1 : 1);
}

function sortByBullet(arr) {
    arr.sort((a, b) => a.rate_bullet > b.rate_bullet ? -1 : 1);
}


function sortByBlitz(arr) {
    arr.sort((a, b) => a.rate_blitz > b.rate_blitz ? -1 : 1);
}

export {sortByRapid, sortByBullet, sortByBlitz}
