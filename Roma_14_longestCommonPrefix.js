/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var common = strs[0];
    var index;
    for (var i = 1; i < strs.length; i++) {
        index = -1;
        while(true){
            index = strs[i].indexOf(common)
            if (index !== 0) {
                if (common.length === 1 ){
                    return ('');
                }
                else {
                  common = common.slice(0,common.length-1);
//                    common = common[common.length-1];
                }
            }
            else {
                break;
            }
        }
    }
    return common;

