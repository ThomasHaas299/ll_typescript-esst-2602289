"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = Demo;
function Demo() {
    var MyEnumErrorCode;
    (function (MyEnumErrorCode) {
        MyEnumErrorCode[MyEnumErrorCode["ERR_1"] = 0] = "ERR_1";
        MyEnumErrorCode[MyEnumErrorCode["ERR_199"] = 1] = "ERR_199";
        MyEnumErrorCode[MyEnumErrorCode["ERR_9000"] = 2] = "ERR_9000";
    })(MyEnumErrorCode || (MyEnumErrorCode = {}));
    var error = "ERR_9000";
    var error2 = MyEnumErrorCode.ERR_199;
    // MyEnumErrorCode.ERR_1 = 3;
    console.log(MyEnumErrorCode);
}
Demo();
