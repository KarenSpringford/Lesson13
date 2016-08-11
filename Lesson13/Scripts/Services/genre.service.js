app.service("GenreService", function ($http) {
    this.getGenres = function () {
        return $http.get("/api/Genres");
    };
});
