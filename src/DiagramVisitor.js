import ClassDiagramVisitor from "../gen/ClassDiagramVisitor.js";
import antlr4 from 'antlr4';
import Utility from "./Models/Utility.js";
import Data from "./Data.js";
import ClassNode from "./Models/ClassNode.js";
import AttributeNode from "./Models/AttributeNode.js";
import InterfaceNode from "./Models/InterfaceNode.js";
import MethodeNode from "./Models/MethodeNode.js";
import ParameterNode from "./Models/ParameterNode.js";
import ImplementNode from "./Models/ImplementNode.js";
import RelationshipNode from "./Models/RelationshipNode.js";
import SideNode from "./Models/SideNode.js";

export default class DiagramVisitor extends ClassDiagramVisitor{

    // Visit a parse tree produced by ClassDiagramParser#diagram.
    visitDiagram(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#class.
    visitClass(ctx) {
        let obj = new ClassNode(ctx.VISIBILITY().getText(), ctx.NAME().getText())

        Data.classes.set(ctx.NAME().getText(), obj);

        ctx.parentCtx = obj;

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#interface.
    visitInterface(ctx) {
        let obj = new InterfaceNode(ctx.NAME().getText())

        Data.interfaces.set(ctx.NAME().getText(), obj);

        ctx.parentCtx = obj;
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#atrribute.
    visitAtrribute(ctx) {
        let parent = Data.classes.get(ctx.parentCtx.NAME().getText())

        parent.attributes.push(new AttributeNode(ctx.VISIBILITY().getText(), ctx.NAME(0).getText(), ctx.NAME(1).getText()))
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#methode.
    visitMethode(ctx) {
        let obj = new MethodeNode(ctx.VISIBILITY().getText(), ctx.NAME(0).getText(),ctx.NAME(0).getText());

        ctx.parentCtx.parentCtx.functions.push(obj);

        ctx.parentCtx = obj;

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#parameter.
    visitParameter(ctx) {
        let obj = new ParameterNode(ctx.NAME(0).getText(), ctx.NAME(1).getText())

        ctx.parentCtx.parentCtx.parameters.push(obj);

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#finalParameter.
    visitFinalParameter(ctx) {
        let obj = new ParameterNode(ctx.NAME(0).getText(), ctx.NAME(1).getText())

        ctx.parentCtx.parentCtx.parameters.push(obj);

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#extends.
    visitExtends(ctx) {
        let obj = new ImplementNode(ctx.NAME(1).getText(), ctx.NAME(0).getText())

        Data.descent.push(obj);

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#implements.
    visitImplements(ctx) {
        let obj = new ImplementNode(ctx.NAME(1).getText(), ctx.NAME(0).getText())

        Data.implement.push(obj);

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#relationship.
    visitRelationship(ctx) {
        let obj = new RelationshipNode();

        Data.relationShips.push(obj);

        ctx.parentCtx = obj;

        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by ClassDiagramParser#side.
    visitSide(ctx) {
        let obj = new SideNode(ctx.VISIBILITY().getText(), ctx.RELATIONSHIP_TYPE().getText(), ctx.NAME(1).getText(), ctx.NAME(0).getText())

        if (ctx.parentCtx.parentCtx.sideA === undefined) {
            ctx.parentCtx.parentCtx.sideA = obj;
            ctx.parentCtx = obj;
        } else {
            ctx.parentCtx.parentCtx.sideB = obj;
            ctx.parentCtx = obj;
        }

        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by ClassDiagramParser#multiplicity.
    visitMultiplicity(ctx) {
        let multi = "";

        multi = multi.concat(ctx.COUNT(0).getText());

        if(ctx.COUNT(1) !== null){
            multi = multi.concat(ctx.DOUBLE_POINT().getText());
            multi = multi.concat(ctx.COUNT(1).getText());
        }

        ctx.parentCtx.parentCtx.multiplicity = multi

        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by ClassDiagramParser#end.
    visitEnd(ctx) {
        return this.visitChildren(ctx);
    }

}
