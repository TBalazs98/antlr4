grammar ClassDiagram;

/*
 * Parser Rules
 */
diagram : interface* class* implements* extends* relationship*;
class : ABSTRACT? VISIBILITY CLASS NAME NEWLINE? atrribute* methode* end;
interface: INTERFACE NAME NEWLINE methode* end;
atrribute : STATIC? VISIBILITY NAME COLON NAME NEWLINE;
methode : ABSTRACT? STATIC? VISIBILITY NAME BRACKET_START parameter* finalParameter BRACKET_END COLON NAME NEWLINE;
parameter: NAME COLON NAME COMMA;
finalParameter: NAME COLON NAME;
extends: EXTENDS NAME COLON NAME NEWLINE end;
implements: IMPLEMENTS NAME COLON NAME NEWLINE end;
relationship: RELATIONSHIP NEWLINE side side end;
side : VISIBILITY NAME RELATIONSHIP_TYPE NAME COLON multiplicity NEWLINE;
multiplicity: COUNT DOUBLE_POINT? COUNT?;
end: END NEWLINE*;

//tagváltozók viszgálat
//1-2 oldalas összefoglaló
//github
// min .. max cardinality
/*
 * Lexer Rules
 */

ABSTRACT            : 'abstract';
STATIC              : 'static';
CLASS               : 'class';
INTERFACE           : 'interface';
RELATIONSHIP        : 'relationship';
EXTENDS             : 'extends';
IMPLEMENTS          : 'implements';
RELATIONSHIP_TYPE   : 'association' | 'directed_association' | 'composition' | 'aggregation';
COUNT               : '*' | [0-9]+;
NAME                : [a-zA-Z0-9]+ ;
VISIBILITY          : '+' | '-' | '#';
NEWLINE             : ('\r' | '\n');
WHITESPACE          : (' ' | '\t') -> skip;
BRACKET_START       : ('(');
BRACKET_END         : (')');
COLON               : ':';
SEMI_COLON          : ';';
COMMA               : ',';
DASH                : '_';
END                 : '!';
DOUBLE_POINT        : '..';
