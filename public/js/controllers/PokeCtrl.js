

function PokeCtrl($scope) {
    $scope.pokemonList = [
        {number: '001', name: 'Bulbasaur', nickname: 'Georgia', level:10},
        {number: '004', name: 'Charmander', nickname: 'Charles', level:16}
    ];

    $scope.addPokemon = function() {
        $scope.pokemonList.push({
            number: $scope.new.number
            ,name:  $scope.new.name
            ,nickname:  $scope.new.nickname
            ,level:  $scope.new.level
        });
        $scope.new = null;
    };
}