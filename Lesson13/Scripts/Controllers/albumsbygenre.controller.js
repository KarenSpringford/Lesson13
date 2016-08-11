app.controller("AlbumsByGenreController", ['$scope', 'AlbumsByGenreService', function ($scope, AlbumsByGenreService) {
        $scope.init = function (genre) {
            getAlbumsByGenre(genre);
        };
        function getAlbumsByGenre(genre) {
            var callAlbumsByGenreService = AlbumsByGenreService.getAlbumsByGenre(genre);
            callAlbumsByGenreService.then(function (albums) {
                $scope.albumsbygenre = albums.data;
            }, function (error) {
                console.error("Something went wrong..");
            });
        }
    }]);
