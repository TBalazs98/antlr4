export default class Data{

    static classes = new Map();
    static interfaces = new Map();
    static relationShips = []
    static descent = []
    static implement = []
    static dependency = []

    static clear(){
        Data.classes = new Map();
        Data.interfaces = new Map();
        Data.relationShips = [];
        Data.descent = [];
        Data.implement = [];
        Data.dependency = [];
    }
}
