
export default class ClassNode{
    visibility;
    name;
    attributes;
    functions;

    constructor(visibility, name) {
        this.name = name;
        this.visibility = visibility;
        this.attributes = [];
        this.functions = [];
    }

}
