import Utility from "./Utility.js";

export default class AttributeNode{
    visibility;
    name;
    type;

    constructor(visibility, name, type) {
        this.visibility = visibility;
        this.name = name;
        this.type = type;
    }

}
