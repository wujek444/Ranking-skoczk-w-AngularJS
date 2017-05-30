'use strict'; //podawaj bardziej szczegółowe komunikaty o błędach
//niektóre błędy nie będą pokazywane bez tego!!!!!

//określamy moduł naszej aplikacji -> jako parametr podajemy nazwę użytą przy ng-app
//oraz zbiór danych jako tablicę (tutaj definiujemy zależności od innych modułów)
var app = angular.module('aplikacja', []);

//w aplikacji definiujemy kontroler -> jako drugi parametr podajemy treść kontrolera
/*pierwszym argumentem jest nazwa kontrolera,
* drugim argumentem jest tablica przechowująca dane:
	-początkowe elementy tablicy są kolejnymi parametrami, które dalej wykorzystamy jako argumenty funkcji (bez tego Angular nie potrafi odczytać w funkcji tych parametrów w odpowiedni sposób)
	-ostatni element tablicy jest funkcją, która korzysta z poprzednio podanych parametrów*/
/*$filter jest funkcją filtrującą dostępną w Angularze -> wykorzystamy to do filtrowania po wprowadzonych danych tekstowych podanych */
app.controller('kontrolerTabeliSkoczkow', ['$scope', '$filter', function($scope, $filter) {
    //do $scope możemy przypisać dowolną nazwę

    //dodajemy możliwość edycji skoczka:
    $scope.edycja = false; //domyślnie nie edytujemy -> dopiero po naciśnięciu przycisku


    //dodajemy możliwość dodania skoczka (bez żadnych parametrów - dane ściągamy z ng-model):
    $scope.dodajSkoczka = function(){
        //dodajemy skoczka na początku/na końcu za pomocą metody splice (tylko że nie usuwamy i modyfikujemy):
        $scope.skoczkowie.splice($scope.skoczkowie.length, 0, 
            {
                Name: $scope.nazwiskoSkoczka,
                Rank: $scope.miejsceSkoczka,
                Bib: $scope.bibSkoczka,
                Points: $scope.punktySkoczka,
            });
    };


    //w obrębie scope definiujemy funkcję, która usunie skoczka (wywoływana poprzez kliknięcie przycisku usuń)
    $scope.usunSkoczka = function( $index ){
        //wyświetlenie komunikatu w konsoli w trybie programisty w przeglądarce:
        console.log( 'Skoczek powinien zostać usunięty!' );
        console.log( $scope.skoczkowie[$index] );
        //usuwam jeden element o indeksie $index z tablicy skoczkowie
        $scope.skoczkowie.splice($index, 1);
    };





    //tutaj podajemy dane w postaci JSON (tablica danych)
    $scope.skoczkowie = [{
            "Rank": 1,
            "Bib": 30,
            "Name": "KRAFT Stefan",
            "Points": 244.4
        },
        {
            "Rank": 2,
            "Bib": 29,
            "Name": "WELLINGER Andreas",
            "Points": 236.2
        },
        {
            "Rank": 3,
            "Bib": 27,
            "Name": "KASAI Noriaki",
            "Points": 223.9
        },
        {
            "Rank": 4,
            "Bib": 20,
            "Name": "EISENBICHLER Markus",
            "Points": 223.2
        },
        {
            "Rank": 5,
            "Bib": 28,
            "Name": "STOCH Kamil",
            "Points": 216.8
        },
        {
            "Rank": 6,
            "Bib": 25,
            "Name": "PREVC Peter",
            "Points": 211.9
        },
        {
            "Rank": 7,
            "Bib": 18,
            "Name": "JOHANSSON Robert",
            "Points": 211.8
        },
        {
            "Rank": 8,
            "Bib": 22,
            "Name": "TEPES Jurij",
            "Points": 209.9
        },
        {
            "Rank": 9,
            "Bib": 15,
            "Name": "FORFANG Johann Andre",
            "Points": 209.6
        },
        {
            "Rank": 10,
            "Bib": 14,
            "Name": "FANNEMEL Anders",
            "Points": 207.9
        },
        {
            "Rank": 11,
            "Bib": 21,
            "Name": "ZYLA Piotr",
            "Points": 206.7
        },
        {
            "Rank": 12,
            "Bib": 26,
            "Name": "HAYBOECK Michael",
            "Points": 204
        },
        {
            "Rank": 13,
            "Bib": 17,
            "Name": "STJERNEN Andreas",
            "Points": 203.9
        },
        {
            "Rank": 14,
            "Bib": 19,
            "Name": "KOT Maciej",
            "Points": 200.9
        },
        {
            "Rank": 15,
            "Bib": 9,
            "Name": "KUBACKI Dawid",
            "Points": 197.6
        },
        {
            "Rank": 16,
            "Bib": 16,
            "Name": "FREITAG Richard",
            "Points": 194.9
        },
        {
            "Rank": 17,
            "Bib": 24,
            "Name": "PREVC Domen",
            "Points": 193.8
        },
        {
            "Rank": 18,
            "Bib": 10,
            "Name": "FETTNER Manuel",
            "Points": 191.9
        },
        {
            "Rank": 19,
            "Bib": 8,
            "Name": "KLIMOV Evgeniy",
            "Points": 191.6
        },
        {
            "Rank": 20,
            "Bib": 5,
            "Name": "KOUDELKA Roman",
            "Points": 191.3
        },
        {
            "Rank": 21,
            "Bib": 7,
            "Name": "AMMANN Simon",
            "Points": 190.3
        },
        {
            "Rank": 22,
            "Bib": 11,
            "Name": "ITO Daiki",
            "Points": 190.1
        },
        {
            "Rank": 23,
            "Bib": 12,
            "Name": "GEIGER Karl",
            "Points": 190
        },
        {
            "Rank": 24,
            "Bib": 13,
            "Name": "DAMJAN Jernej",
            "Points": 189.5
        },
        {
            "Rank": 25,
            "Bib": 3,
            "Name": "LANISEK Anze",
            "Points": 185
        },
        {
            "Rank": 26,
            "Bib": 4,
            "Name": "DESCOMBES SEVOIE Vincent",
            "Points": 183.8
        },
        {
            "Rank": 27,
            "Bib": 2,
            "Name": "TAKEUCHI Taku",
            "Points": 183.6
        },
        {
            "Rank": 28,
            "Bib": 6,
            "Name": "ZIOBRO Jan",
            "Points": 179.3
        },
        {
            "Rank": 29,
            "Bib": 1,
            "Name": "LEYHE Stephan",
            "Points": 165.6
        }
    ]
}]);