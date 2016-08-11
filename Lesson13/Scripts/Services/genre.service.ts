app.service("GenreService", function ($http) {
    this.getGenres = () => {
        return $http.get("/api/Genres");
    }
});