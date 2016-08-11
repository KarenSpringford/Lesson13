app.controller('GenreController', ['$scope', 'GenreService', function ($scope, GenreService)
    {
    function getGenres(): void {
        let callGenreService = GenreService.getGenres();

        callGenreService
            .then((genre) => {
                $scope.genres = genre.data;
            },
            (error) => {
                console.error("Something went wrong while fetching the data!");
            });
    }
}]);