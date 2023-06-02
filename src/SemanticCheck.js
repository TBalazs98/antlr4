import Data from "./Data.js";

export default class SemanticCheck{

    checkObjectNames(){
        let objects = [...Data.classes.values(), ...Data.interfaces.values()]

        for(let i=0; i< objects.length; i++){
            for(let j=i+1; j < objects.length; j++){
                if(objects[i].name === objects[j].name){
                    return `Az egyes objektumok neve egyedi kell, hogy legyen: ${objects[i]}!`
                }
            }
        }

    }


    checkAttributes(){
        let objects = [...Data.classes.values()]

        for(let i=0; i<objects.length; i++){
            let all = []
            let attributes = [];

            let parents = this.getParents([objects[i].name], all);

            parents.map(x => {
                x.attributes.map(y => {
                    if(y.visibility === '#' || y.visibility === '+'){
                        attributes.push(y);
                    }
                })
            })

            for(let j=0; j< objects[i].attributes.length; j++){
                for(let k=j+1; k < objects.length; k++){
                    if((objects[i].attributes[j].name === attributes[k].name) && (objects[i].attributes[j].type === attributes[k].type)){
                        return `Attribútum egyezés: ${objects[i]} - ${attributes[k].name}!`
                    }
                }
            }
        }
    }

    getParents(current, all) {

        if (current.length === 0) {
            return all;
        }

        let newParents = []

        for (let i = 0; i < current.length; i++){
            for (let j = 0; j < Data.descent.length; j++) {
                if (Data.descent[j].child === current[i]) {
                    newParents.push(Data.descent[j].parent)
                    all.push(Data.descent[j].parent)
                }
            }
        }

        this.getParents(newParents, all)
    }

    checkFunctions(){

    }




}
