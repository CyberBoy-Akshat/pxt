// /// <reference path="../../built/pxtlib.d.ts" />

// import * as Blockly from "blockly";

// namespace pxtblockly {

//     export class FieldToggleUpDown extends FieldToggle implements Blockly.FieldCustom {
//         public isFieldCustom_ = true;

//         constructor(state: string, params: Blockly.FieldCustomOptions, opt_validator?: Function) {
//             super(state, params, opt_validator);
//         }

//         getTrueText() {
//             return lf("UP");
//         }

//         getFalseText() {
//             return lf("DOWN");
//         }
//     }

//     export class FieldToggleDownUp extends FieldToggle implements Blockly.FieldCustom {
//         public isFieldCustom_ = true;

//         constructor(state: string, params: Blockly.FieldCustomOptions, opt_validator?: Function) {
//             super(state, params, opt_validator);
//         }

//         getTrueText() {
//             return lf("DOWN");
//         }

//         getFalseText() {
//             return lf("UP");
//         }
//     }
// }