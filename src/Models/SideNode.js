export default class SideNode{
    visibility;
    type;
    name;
    multiplicity;
    target;

    constructor(visibility, type, name, target) {
        this.visibility = visibility;
        this.name = name;
        this.type = type;
        this.target = target;
    }
}
