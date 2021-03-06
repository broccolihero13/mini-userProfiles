// INITILIZE SERVICE
// ============================================================
angular.module("userProfiles").service("mainService", function($http) {
    var data = [{
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        "isFavorite": true
    }, {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }, {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }];

    this.getUsers = function() {
        return data;
    };
    this.toggleFavorite = function(favUser) {
        data[favUser].isFavorite = !data[favUser].isFavorite;
    };
});
