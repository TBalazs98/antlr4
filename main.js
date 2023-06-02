import './style.css'

import {graphviz} from 'd3-graphviz';

import {CommonTokenStream, InputStream, ParseTreeWalker} from "antlr4";
import ClassDiagramLexer from './gen/ClassDiagramLexer';
import ClassDiagramParser from './gen/ClassDiagramParser.js';
import ClassDiagramVisitor from './gen/ClassDiagramVisitor.js';
import antlr4 from 'antlr4';
import ClassDiagramListener from "./gen/ClassDiagramListener.js";
import DiagramVisitor from "./src/DiagramVisitor.js";
import ClassNode from "./src/Models/ClassNode.js";
import Data from "./src/Data.js";
import Utility from "./src/Models/Utility.js";

    const title = 'classdiagram';
    const inputF = document.getElementById("inputField");

    let classDiagram = "digraph UML_Class_diagram {";

    const input = "interface Vehicle\n" +
        "+maxSpeed(type: string): int\n" +
        "!\n" +
        "\n" +
        "+class Car\n" +
        "-weight: int\n" +
        "+range(range: int): int\n" +
        "!\n" +
        "\n" +
        "+class Wheel\n" +
        "-price(value: double): double\n" +
        "!\n" +
        "\n" +
        "implements Car : Vehicle\n" +
        "!\n" +
        "\n" +
        "relationship\n" +
        "+ Car composition wheel: *\n" +
        "+ Wheel association car: 1\n" +
        "!"


    function createGraph(){
        generateDiagram()

        graphviz("#graph")
            .width(window.innerWidth * 0.7)
            .height(window.innerHeight)
            .renderDot(classDiagram);
    }

    function generateDiagram(){
        const chars = new InputStream(inputF.value);
        const lexer = new ClassDiagramLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new ClassDiagramParser(tokens);
        const listener = new ClassDiagramListener();
        parser.buildParseTrees = true;

        //var tree = parser.class_();
        let tree = parser.diagram();


        //tree.accept(new ClassDiagramVisitor())
        tree.accept(new DiagramVisitor())

        console.log(Data)


        baseSettings();

        Data.interfaces.forEach(x => {
            createInterface(x)
        })

        Data.classes.forEach(x => {
            createClass(x)
        })

        Data.implement.map(x=>{
            createImplement(x)
        })

        Data.descent.map(x => {
            createDescent(x)
        })

        Data.relationShips.map(x =>{
            createRelationship(x);
        })

        classDiagram = classDiagram.concat("}");

        console.log(classDiagram)
    }

    function baseSettings(){
        classDiagram = classDiagram.concat("graph [labelloc=\"t\"]");
        classDiagram = classDiagram.concat("node [shape=record, style=filled, fillcolor=gray95]");
    }

    function createInterface(param){
        classDiagram = classDiagram.concat(`${param.name}[label = <{<b>«interface» ${param.name}</b> |`)

        param.functions.map(x => {
            createMethod(x);
        })

        classDiagram = classDiagram.concat("}>]\n")
    }

    function createClass(param){
        classDiagram = classDiagram.concat(`${param.name}[label = <{<b>${param.name}<b/> |`);
        param.attributes.map(x => {
            createAttribute(x);
        })

        classDiagram = classDiagram.concat("|")

        param.functions.map(x => {
            createMethod(x);
        })

        classDiagram = classDiagram.concat("}>]\n")
    }

    function createMethod(param){
        classDiagram = classDiagram.concat(`${param.visibility} ${param.name}(`);

        createParameters(param.parameters)

        classDiagram = classDiagram.concat(")<br/>")
    }

    function createParameters(params){

        if(params.length > 1){
            for(let i=0; i<params.length; i++){
                classDiagram = classDiagram.concat(`${params[i].name}: ${params[i].type}, `)
            }
        }

        classDiagram = classDiagram.concat(`${params[params.length-1].name}: ${params[params.length-1].type}`)
    }

    function createAttribute(param){
        classDiagram = classDiagram.concat(`${param.visibility} ${param.name}: ${param.type}<br/>`);
    }

    function createImplement(param){
        classDiagram = classDiagram.concat( `${param.child} -> ${param.parent} [arrowhead=empty]`)
    }

    function createDescent(param){
        classDiagram = classDiagram.concat( `${param.child} -> ${param.parent} [arrowhead=normal]`)
    }

    function createRelationship(param){
        console.log(param.sideA.visibility)
        let asd = param.sideA.name;

        classDiagram = classDiagram.concat(`${param.sideA.target} -> ${param.sideB.target} 
        [arrowhead=${Utility.tail.get(param.sideA.type)}, arrowtail=${Utility.tail.get(param.sideA.type)}
        headlabel=${param.sideA.name},
        taillabel=${param.sideB.name}]`);
    }

    //${createLabel(param.sideA.visibility, param.sideA.name, param.sideA.multiplicity)}
    //${createLabel(param.sideB.visibility, param.sideB.name, param.sideB.multiplicity)}

    function createLabel(vis, name, multi){
        return `${vis}${name}:${multi}`;
    }

    function clearData(){
        Data.clear();
    }

    document.getElementById("generateButton").addEventListener("click", () => {
        clearData()
        classDiagram = "digraph UML_Class_diagram {"
        createGraph();
    });
