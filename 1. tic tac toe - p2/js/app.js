import Player from '/js/model/Player.js';

const gameModel = {
    current_player_index : 1,

    get currentPlayer(){
        if(this.current_player_index === 1){
            return this.player1;
        }else{
            return this.player2;
        }
    },

    player1: {},
    player2: {},
    wining_positions: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

};

const gameController = {

    /**
     * init function for the main controller
     * object creation will happen here
     */
    init() {
        //const result =  this.isGameEnd([4],gameModeStevenl.wining_positions);
        //console.log(result);
        gameModel.player1 = new Player("Ryan", 'O');
        gameModel.player2 = new Player("Steven", 'X');

        gameView.init();
    },

    /**
     * Check if the given position list is enough to end the game
     * 
     * @param {Array} positions 
     * @param {Array} wining_positions 
     */
    isGameEnd(positions, wining_positions) {

        //looping over positions 
        for (const index in wining_positions) {
            let is_game_end = true;

            //looping over item
            for (const j in wining_positions[index]) {
                const current_wining_position = wining_positions[index][j];

                //if not matching item is found
                //End the search
                if (positions.indexOf(current_wining_position) = -1) {
                    is_game_end = false;
                }
            }
            if (is_game_end) {
                console.log("the game is end");
                return true;
            }
        }
        return false;
    },

    addPosition(position){
        //current player's position store

        console.log(gameModel.currentPlayer);

        //check if the game is end

        //change the current user

        //re-render
    }
};

const gameView = {
    init() {
        //Select all checkbox
        this.checkboxes = document.querySelectorAll(".game-view input[type='checkbox']");
        for (const box of this.checkboxes) {
            box.addEventListener('change', (event) => this.checkboxChange(event));
        }
    },
    checkboxChange(event) {
        const current_block = event.target.dataset.block;
        gameController.addPosition(current_block);
    }
}

const registerView = {

}

const scoreBoardView = {

}

gameController.init();