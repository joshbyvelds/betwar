/* Bet War - Javascript Card Game */

(function(){

    // Settings
    starting_money = 10000;

    //Game Variables..
    var opponent;
    var player;
    var state;
    var dealer;

    function init(){
        createPlayers();
    }

    function createPlayers(){
        opponent = {
            "money": starting_money,
            "cards": [],
        };

        player = {
            "money": starting_money,
            "cards": [],
        };
    }

    function saveGame(){
        //TODO:: Save game to file if on server, or localstorage if on user machine.
    }

    function loadGame(){
        //TODO:: Load saved game and inject saved state onto gameboard.
    }

    $(document).ready(init);
}());