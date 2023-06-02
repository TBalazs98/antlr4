import Data from "../Data.js";

export default class Utility{

    static visibility = new Map([
        ["+", "public"],
        ["-", "private"],
        ["#", "protected"]
    ]);

    static line = new Map([
        ['association','solid'],
        ['directed_association','solid'],
        ['composition','solid'],
        ['aggregation','solid'],
    ]);

    static tail = new Map([
        ['association','none'],
        ['directed_association','open'],
        ['composition','diamond'],
        ['aggregation','ediamond'],
    ])


}
