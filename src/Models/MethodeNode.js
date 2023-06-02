import Utility from "./Utility.js";

export default class MethodeNode{
    visibility;
    name;
    parameters;
    returnType;

    constructor(visibility, name, returnType) {
        this.visibility = visibility;
        this.name = name;
        this.returnType = returnType;
        this.parameters = [];
    }
}
