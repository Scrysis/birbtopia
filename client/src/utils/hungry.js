import Birb from "../../../server/models/Birb";


class Hungry {
    getTime (Date){

        const timeDifference = Date.now.getTime() - Date.getTime();

        return timeDifference/ (1000 * 60 * 60);

    }

    async subtractFood(birbID){

        const birb = await Birb.findById(birbID);
        birb.food = birb.food - 15;
               
    }

    async checkUserBirbs(){
        
    }


}

export default new Hungry();