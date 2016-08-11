app.service("AlbumsByGenreSerice", function ($http) {
    this.getAlbumsByGenre = function (genre) {
        var urlPath = "api/Albums?genre=" + genre;
        return $http.get(urlPath);
    };
});
