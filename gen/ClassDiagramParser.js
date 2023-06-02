// Generated from ClassDiagram.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import ClassDiagramListener from './ClassDiagramListener.js';
import ClassDiagramVisitor from './ClassDiagramVisitor.js';

const serializedATN = [4,1,21,172,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,5,0,
40,8,0,10,0,12,0,43,9,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,5,0,52,8,0,10,
0,12,0,55,9,0,1,1,3,1,58,8,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,1,5,1,67,8,1,10,
1,12,1,70,9,1,1,1,5,1,73,8,1,10,1,12,1,76,9,1,1,1,1,1,1,2,1,2,1,2,1,2,5,
2,84,8,2,10,2,12,2,87,9,2,1,2,1,2,1,3,3,3,92,8,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,4,3,4,101,8,4,1,4,3,4,104,8,4,1,4,1,4,1,4,1,4,5,4,110,8,4,10,4,12,4,113,
9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,3,11,160,8,11,1,11,3,11,
163,8,11,1,12,1,12,5,12,167,8,12,10,12,12,12,170,9,12,1,12,0,0,13,0,2,4,
6,8,10,12,14,16,18,20,22,24,0,0,175,0,29,1,0,0,0,2,57,1,0,0,0,4,79,1,0,0,
0,6,91,1,0,0,0,8,100,1,0,0,0,10,120,1,0,0,0,12,125,1,0,0,0,14,129,1,0,0,
0,16,136,1,0,0,0,18,143,1,0,0,0,20,149,1,0,0,0,22,157,1,0,0,0,24,164,1,0,
0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,
0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,
35,33,1,0,0,0,35,36,1,0,0,0,36,41,1,0,0,0,37,35,1,0,0,0,38,40,3,16,8,0,39,
38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,47,1,0,0,0,43,41,
1,0,0,0,44,46,3,14,7,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,
0,0,0,48,53,1,0,0,0,49,47,1,0,0,0,50,52,3,18,9,0,51,50,1,0,0,0,52,55,1,0,
0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,1,1,0,0,0,55,53,1,0,0,0,56,58,5,1,0,0,
57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,5,11,0,0,60,61,5,3,0,0,61,
63,5,10,0,0,62,64,5,12,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,68,1,0,0,0,65,
67,3,6,3,0,66,65,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,74,
1,0,0,0,70,68,1,0,0,0,71,73,3,8,4,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,
0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,78,3,24,12,0,78,3,1,0,
0,0,79,80,5,4,0,0,80,81,5,10,0,0,81,85,5,12,0,0,82,84,3,8,4,0,83,82,1,0,
0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,
0,88,89,3,24,12,0,89,5,1,0,0,0,90,92,5,2,0,0,91,90,1,0,0,0,91,92,1,0,0,0,
92,93,1,0,0,0,93,94,5,11,0,0,94,95,5,10,0,0,95,96,5,16,0,0,96,97,5,10,0,
0,97,98,5,12,0,0,98,7,1,0,0,0,99,101,5,1,0,0,100,99,1,0,0,0,100,101,1,0,
0,0,101,103,1,0,0,0,102,104,5,2,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,
105,1,0,0,0,105,106,5,11,0,0,106,107,5,10,0,0,107,111,5,14,0,0,108,110,3,
10,5,0,109,108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,
114,1,0,0,0,113,111,1,0,0,0,114,115,3,12,6,0,115,116,5,15,0,0,116,117,5,
16,0,0,117,118,5,10,0,0,118,119,5,12,0,0,119,9,1,0,0,0,120,121,5,10,0,0,
121,122,5,16,0,0,122,123,5,10,0,0,123,124,5,18,0,0,124,11,1,0,0,0,125,126,
5,10,0,0,126,127,5,16,0,0,127,128,5,10,0,0,128,13,1,0,0,0,129,130,5,6,0,
0,130,131,5,10,0,0,131,132,5,16,0,0,132,133,5,10,0,0,133,134,5,12,0,0,134,
135,3,24,12,0,135,15,1,0,0,0,136,137,5,7,0,0,137,138,5,10,0,0,138,139,5,
16,0,0,139,140,5,10,0,0,140,141,5,12,0,0,141,142,3,24,12,0,142,17,1,0,0,
0,143,144,5,5,0,0,144,145,5,12,0,0,145,146,3,20,10,0,146,147,3,20,10,0,147,
148,3,24,12,0,148,19,1,0,0,0,149,150,5,11,0,0,150,151,5,10,0,0,151,152,5,
8,0,0,152,153,5,10,0,0,153,154,5,16,0,0,154,155,3,22,11,0,155,156,5,12,0,
0,156,21,1,0,0,0,157,159,5,9,0,0,158,160,5,21,0,0,159,158,1,0,0,0,159,160,
1,0,0,0,160,162,1,0,0,0,161,163,5,9,0,0,162,161,1,0,0,0,162,163,1,0,0,0,
163,23,1,0,0,0,164,168,5,20,0,0,165,167,5,12,0,0,166,165,1,0,0,0,167,170,
1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,25,1,0,0,0,170,168,1,0,0,0,17,
29,35,41,47,53,57,63,68,74,85,91,100,103,111,159,162,168];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ClassDiagramParser extends antlr4.Parser {

    static grammarFileName = "ClassDiagram.g4";
    static literalNames = [ null, "'abstract'", "'static'", "'class'", "'interface'", 
                            "'relationship'", "'extends'", "'implements'", 
                            null, null, null, null, null, null, null, null, 
                            "':'", "';'", "','", "'_'", "'!'", "'..'" ];
    static symbolicNames = [ null, "ABSTRACT", "STATIC", "CLASS", "INTERFACE", 
                             "RELATIONSHIP", "EXTENDS", "IMPLEMENTS", "RELATIONSHIP_TYPE", 
                             "COUNT", "NAME", "VISIBILITY", "NEWLINE", "WHITESPACE", 
                             "BRACKET_START", "BRACKET_END", "COLON", "SEMI_COLON", 
                             "COMMA", "DASH", "END", "DOUBLE_POINT" ];
    static ruleNames = [ "diagram", "class", "interface", "atrribute", "methode", 
                         "parameter", "finalParameter", "extends", "implements", 
                         "relationship", "side", "multiplicity", "end" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ClassDiagramParser.ruleNames;
        this.literalNames = ClassDiagramParser.literalNames;
        this.symbolicNames = ClassDiagramParser.symbolicNames;
    }



	diagram() {
	    let localctx = new DiagramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ClassDiagramParser.RULE_diagram);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 26;
	            this.interface_();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===11) {
	            this.state = 32;
	            this.class_();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 38;
	            this.implements_();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 44;
	            this.extends_();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 50;
	            this.relationship();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new ClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ClassDiagramParser.RULE_class);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 56;
	            this.match(ClassDiagramParser.ABSTRACT);
	        }

	        this.state = 59;
	        this.match(ClassDiagramParser.VISIBILITY);
	        this.state = 60;
	        this.match(ClassDiagramParser.CLASS);
	        this.state = 61;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 62;
	            this.match(ClassDiagramParser.NEWLINE);
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 65;
	                this.atrribute(); 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2054) !== 0)) {
	            this.state = 71;
	            this.methode();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
	        this.end();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interface_() {
	    let localctx = new InterfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ClassDiagramParser.RULE_interface);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(ClassDiagramParser.INTERFACE);
	        this.state = 80;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 81;
	        this.match(ClassDiagramParser.NEWLINE);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2054) !== 0)) {
	            this.state = 82;
	            this.methode();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
	        this.end();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atrribute() {
	    let localctx = new AtrributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ClassDiagramParser.RULE_atrribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 90;
	            this.match(ClassDiagramParser.STATIC);
	        }

	        this.state = 93;
	        this.match(ClassDiagramParser.VISIBILITY);
	        this.state = 94;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 95;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 96;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 97;
	        this.match(ClassDiagramParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methode() {
	    let localctx = new MethodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ClassDiagramParser.RULE_methode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 99;
	            this.match(ClassDiagramParser.ABSTRACT);
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 102;
	            this.match(ClassDiagramParser.STATIC);
	        }

	        this.state = 105;
	        this.match(ClassDiagramParser.VISIBILITY);
	        this.state = 106;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 107;
	        this.match(ClassDiagramParser.BRACKET_START);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 108;
	                this.parameter(); 
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 114;
	        this.finalParameter();
	        this.state = 115;
	        this.match(ClassDiagramParser.BRACKET_END);
	        this.state = 116;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 117;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 118;
	        this.match(ClassDiagramParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ClassDiagramParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 121;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 122;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 123;
	        this.match(ClassDiagramParser.COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finalParameter() {
	    let localctx = new FinalParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ClassDiagramParser.RULE_finalParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 126;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 127;
	        this.match(ClassDiagramParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extends_() {
	    let localctx = new ExtendsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ClassDiagramParser.RULE_extends);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(ClassDiagramParser.EXTENDS);
	        this.state = 130;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 131;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 132;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 133;
	        this.match(ClassDiagramParser.NEWLINE);
	        this.state = 134;
	        this.end();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implements_() {
	    let localctx = new ImplementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ClassDiagramParser.RULE_implements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(ClassDiagramParser.IMPLEMENTS);
	        this.state = 137;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 138;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 139;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 140;
	        this.match(ClassDiagramParser.NEWLINE);
	        this.state = 141;
	        this.end();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationship() {
	    let localctx = new RelationshipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ClassDiagramParser.RULE_relationship);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(ClassDiagramParser.RELATIONSHIP);
	        this.state = 144;
	        this.match(ClassDiagramParser.NEWLINE);
	        this.state = 145;
	        this.side();
	        this.state = 146;
	        this.side();
	        this.state = 147;
	        this.end();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	side() {
	    let localctx = new SideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ClassDiagramParser.RULE_side);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(ClassDiagramParser.VISIBILITY);
	        this.state = 150;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 151;
	        this.match(ClassDiagramParser.RELATIONSHIP_TYPE);
	        this.state = 152;
	        this.match(ClassDiagramParser.NAME);
	        this.state = 153;
	        this.match(ClassDiagramParser.COLON);
	        this.state = 154;
	        this.multiplicity();
	        this.state = 155;
	        this.match(ClassDiagramParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicity() {
	    let localctx = new MultiplicityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ClassDiagramParser.RULE_multiplicity);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(ClassDiagramParser.COUNT);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 158;
	            this.match(ClassDiagramParser.DOUBLE_POINT);
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 161;
	            this.match(ClassDiagramParser.COUNT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ClassDiagramParser.RULE_end);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(ClassDiagramParser.END);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 165;
	            this.match(ClassDiagramParser.NEWLINE);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ClassDiagramParser.EOF = antlr4.Token.EOF;
ClassDiagramParser.ABSTRACT = 1;
ClassDiagramParser.STATIC = 2;
ClassDiagramParser.CLASS = 3;
ClassDiagramParser.INTERFACE = 4;
ClassDiagramParser.RELATIONSHIP = 5;
ClassDiagramParser.EXTENDS = 6;
ClassDiagramParser.IMPLEMENTS = 7;
ClassDiagramParser.RELATIONSHIP_TYPE = 8;
ClassDiagramParser.COUNT = 9;
ClassDiagramParser.NAME = 10;
ClassDiagramParser.VISIBILITY = 11;
ClassDiagramParser.NEWLINE = 12;
ClassDiagramParser.WHITESPACE = 13;
ClassDiagramParser.BRACKET_START = 14;
ClassDiagramParser.BRACKET_END = 15;
ClassDiagramParser.COLON = 16;
ClassDiagramParser.SEMI_COLON = 17;
ClassDiagramParser.COMMA = 18;
ClassDiagramParser.DASH = 19;
ClassDiagramParser.END = 20;
ClassDiagramParser.DOUBLE_POINT = 21;

ClassDiagramParser.RULE_diagram = 0;
ClassDiagramParser.RULE_class = 1;
ClassDiagramParser.RULE_interface = 2;
ClassDiagramParser.RULE_atrribute = 3;
ClassDiagramParser.RULE_methode = 4;
ClassDiagramParser.RULE_parameter = 5;
ClassDiagramParser.RULE_finalParameter = 6;
ClassDiagramParser.RULE_extends = 7;
ClassDiagramParser.RULE_implements = 8;
ClassDiagramParser.RULE_relationship = 9;
ClassDiagramParser.RULE_side = 10;
ClassDiagramParser.RULE_multiplicity = 11;
ClassDiagramParser.RULE_end = 12;

class DiagramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_diagram;
    }

	interface_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceContext,i);
	    }
	};

	class_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassContext);
	    } else {
	        return this.getTypedRuleContext(ClassContext,i);
	    }
	};

	implements_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImplementsContext);
	    } else {
	        return this.getTypedRuleContext(ImplementsContext,i);
	    }
	};

	extends_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExtendsContext);
	    } else {
	        return this.getTypedRuleContext(ExtendsContext,i);
	    }
	};

	relationship = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationshipContext);
	    } else {
	        return this.getTypedRuleContext(RelationshipContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterDiagram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitDiagram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitDiagram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_class;
    }

	VISIBILITY() {
	    return this.getToken(ClassDiagramParser.VISIBILITY, 0);
	};

	CLASS() {
	    return this.getToken(ClassDiagramParser.CLASS, 0);
	};

	NAME() {
	    return this.getToken(ClassDiagramParser.NAME, 0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	ABSTRACT() {
	    return this.getToken(ClassDiagramParser.ABSTRACT, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	atrribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtrributeContext);
	    } else {
	        return this.getTypedRuleContext(AtrributeContext,i);
	    }
	};

	methode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MethodeContext);
	    } else {
	        return this.getTypedRuleContext(MethodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_interface;
    }

	INTERFACE() {
	    return this.getToken(ClassDiagramParser.INTERFACE, 0);
	};

	NAME() {
	    return this.getToken(ClassDiagramParser.NAME, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	methode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MethodeContext);
	    } else {
	        return this.getTypedRuleContext(MethodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterInterface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitInterface(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitInterface(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtrributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_atrribute;
    }

	VISIBILITY() {
	    return this.getToken(ClassDiagramParser.VISIBILITY, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	STATIC() {
	    return this.getToken(ClassDiagramParser.STATIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterAtrribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitAtrribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitAtrribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_methode;
    }

	VISIBILITY() {
	    return this.getToken(ClassDiagramParser.VISIBILITY, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	BRACKET_START() {
	    return this.getToken(ClassDiagramParser.BRACKET_START, 0);
	};

	finalParameter() {
	    return this.getTypedRuleContext(FinalParameterContext,0);
	};

	BRACKET_END() {
	    return this.getToken(ClassDiagramParser.BRACKET_END, 0);
	};

	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	ABSTRACT() {
	    return this.getToken(ClassDiagramParser.ABSTRACT, 0);
	};

	STATIC() {
	    return this.getToken(ClassDiagramParser.STATIC, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterMethode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitMethode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitMethode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_parameter;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	COMMA() {
	    return this.getToken(ClassDiagramParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinalParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_finalParameter;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterFinalParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitFinalParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitFinalParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExtendsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_extends;
    }

	EXTENDS() {
	    return this.getToken(ClassDiagramParser.EXTENDS, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterExtends(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitExtends(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitExtends(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_implements;
    }

	IMPLEMENTS() {
	    return this.getToken(ClassDiagramParser.IMPLEMENTS, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterImplements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitImplements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitImplements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationshipContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_relationship;
    }

	RELATIONSHIP() {
	    return this.getToken(ClassDiagramParser.RELATIONSHIP, 0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	side = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SideContext);
	    } else {
	        return this.getTypedRuleContext(SideContext,i);
	    }
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterRelationship(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitRelationship(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitRelationship(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_side;
    }

	VISIBILITY() {
	    return this.getToken(ClassDiagramParser.VISIBILITY, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NAME);
	    } else {
	        return this.getToken(ClassDiagramParser.NAME, i);
	    }
	};


	RELATIONSHIP_TYPE() {
	    return this.getToken(ClassDiagramParser.RELATIONSHIP_TYPE, 0);
	};

	COLON() {
	    return this.getToken(ClassDiagramParser.COLON, 0);
	};

	multiplicity() {
	    return this.getTypedRuleContext(MultiplicityContext,0);
	};

	NEWLINE() {
	    return this.getToken(ClassDiagramParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterSide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitSide(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitSide(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_multiplicity;
    }

	COUNT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.COUNT);
	    } else {
	        return this.getToken(ClassDiagramParser.COUNT, i);
	    }
	};


	DOUBLE_POINT() {
	    return this.getToken(ClassDiagramParser.DOUBLE_POINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterMultiplicity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitMultiplicity(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitMultiplicity(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClassDiagramParser.RULE_end;
    }

	END() {
	    return this.getToken(ClassDiagramParser.END, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ClassDiagramParser.NEWLINE);
	    } else {
	        return this.getToken(ClassDiagramParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClassDiagramListener ) {
	        listener.exitEnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ClassDiagramVisitor ) {
	        return visitor.visitEnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ClassDiagramParser.DiagramContext = DiagramContext; 
ClassDiagramParser.ClassContext = ClassContext; 
ClassDiagramParser.InterfaceContext = InterfaceContext; 
ClassDiagramParser.AtrributeContext = AtrributeContext; 
ClassDiagramParser.MethodeContext = MethodeContext; 
ClassDiagramParser.ParameterContext = ParameterContext; 
ClassDiagramParser.FinalParameterContext = FinalParameterContext; 
ClassDiagramParser.ExtendsContext = ExtendsContext; 
ClassDiagramParser.ImplementsContext = ImplementsContext; 
ClassDiagramParser.RelationshipContext = RelationshipContext; 
ClassDiagramParser.SideContext = SideContext; 
ClassDiagramParser.MultiplicityContext = MultiplicityContext; 
ClassDiagramParser.EndContext = EndContext; 
