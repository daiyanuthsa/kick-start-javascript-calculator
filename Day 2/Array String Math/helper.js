const helper = {
    set: function(elem, value) {
        document.getElementById(elem).innerHTML = value;
    },
    get: function(elem) {
        return document.getElementById(elem).innerText
    }
}