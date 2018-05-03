/* Bet War - Javascript Card Game */

(function(){

    // Settings
    starting_money = 10000;

    //Game Variables..
    var opponent;
    var player;
    var state;
    var dealer;
    var pot;

    function init(){
        createPlayers();
        setDealer();
        startRound();
    }

    function createPlayers(){
        opponent = {
            "money": starting_money,
            "cards": [],
            "wins": 0,
            "loses": 0,
        };

        player = {
            "money": starting_money,
            "cards": [],
            "wins": 0,
            "loses": 0,
        };
    }

    function setDealer(){
        dealer = (dealer === undefined) ? (Math.round(Math.random())) : (dealer === 0) ? 1 : 0;
        return;
    }

    function startRound(){
        pot = 0;
        state = 1;
        updateUI();
        checkState();
    }

    function checkState(){
        switch(state){
            case(1):
                if(dealer === 0){
                    playerFirstRound();
                }else{
                    opponentFirstRound();
                }
                break;


            default:
                showError("unknown state:" + state);
        }
    }

    function updateUI() {
        $("#player_money").html("$" + numberWithCommas(player.money));
        $("#opp_money").html("$" + numberWithCommas(opponent.money));
        $("#opp_won").html(opponent.wins);
        $("#opp_lost").html(opponent.loses);
        $("#player_won").html(player.wins);
        $("#player_lost").html(player.loses);
        $("#money_pot").html("$" + numberWithCommas(pot));
    }

    function saveGame(){
        //TODO:: Save game to file if on server, or localstorage if on user machine.
    }

    function loadGame(){
        //TODO:: Load saved game and inject saved state onto gameboard.
    }

    function numberWithCommas(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $(document).ready(init);
}());