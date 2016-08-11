app.controller("AlbumsByGenreController", ['$scope', 'AlbumsByGenreService', function
    ($scope, AlbumsByGenreService) {

    $scope.init = (genre: string) => {
        getAlbumsByGenre(genre);
    }
    function getAlbumsByGenre(genre:string):void {
        let callAlbumsByGenreService = AlbumsByGenreService.getAlbumsByGenre(genre);

        callAlbumsByGenreService.then((albums) => {
            $scope.albumsbygenre = albums.data;
        },
            (error) => {
                console.error("Something went wrong..");
            });
    }
}]);