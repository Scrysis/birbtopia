import Birb from "../../../server/models/Birb";


class Hungry {
    getTime (Date){

        const timeDifference = Date.now.getTime() - Date.getTime();

        return timeDifference/ (1000 * 60 * 60);

    }

    subtractFood(birbID){

        const birb = await Birb.findById(birbID);
        birb.food = birb.food - 15;
               
    }

    checkUserBirbs(){
        
    }


}

export default new Hungry();