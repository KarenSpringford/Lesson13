app.controller('GenreController', ['$scope', 'GenreService', function ($scope, GenreService) {
        function getGenres() {
            var callGenreService = GenreService.getGenres();
            callGenreService
                .then(function (genre) {
                $scope.genres = genre.data;
            }, function (error) {
                console.error("Something went wrong while fetching the data!");
            });
        }
    }]);
