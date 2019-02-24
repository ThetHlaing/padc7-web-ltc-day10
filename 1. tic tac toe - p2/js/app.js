const gameModel = {
    player1_name : "My Name",
    player2_name : "Your Name",
    player1_positions : [],
    player2_positions : [],
    wining_positions : [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    
};

const gameController = {

    /**
     * init function for the main controller
     * object creation will happen here
     */
    init(){
       //const result =  this.isGameEnd([4],gameModel.wining_positions);
       //console.log(result);
       gameView.init();
    },

    /**
     * Check if the given position list is enough to end the game
     * 
     * @param {Array} positions 
     * @param {Array} wining_positions 
     */
    isGameEnd(positions,wining_positions){

        //looping over positions 
        for(const index in wining_positions){
            let is_game_end = true;

            //looping over item
            for(const j in wining_positions[index]){
                const current_wining_position = wining_positions[index][j];

                //if not matching item is found
                //End the search
                if(positions.indexOf(current_wining_position) === -1){
                    is_game_end = false;
                }
            }
            if(is_game_end){
                console.log("the game is end");
                return true;
            }
        }
        return false;
    }


};

const gameView = {
    
}

const registerView = {
    
}

const scoreBoardView = {
    
}

gameController.init();