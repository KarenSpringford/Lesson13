app.service("AlbumsByGenreSerice", function ($http) {
    this.getAlbumsByGenre = (genre: string) => {
        let urlPath: string = "api/Albums?genre=" + genre;
        return $http.get(urlPath);
    }
});