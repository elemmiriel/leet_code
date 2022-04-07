/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var common = 0;
    var message = ''
    var shortest = strs[0];
    for (var k = 0; k < strs.length; k++) {
        if(strs[k].length < shortest){
            shortest = strs[k];
        }
    }
    for (var i = 0; i < shortest.length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[j-1][i]){
                if (common > 0) {
                    message = shortest.slice(0, common);
                }
                return message;
            }
        }
        common++;
    }
    return message = shortest.slice(0, common);
}
