module.exports = function check(str, bracketsConfig) {
	var stack = [];
	var beg = [];
	var end = [];
	var char, exp;
	for (var i = 0; i < bracketsConfig.length; i++) {
		beg.push(bracketsConfig[i][0]);
		end.push(bracketsConfig[i][1]);
	}
	for (var i = 0; i < str.length; i++) {
		char = str[i];
		if(beg.indexOf(char) > -1) {
			if (end.indexOf(char) > -1) {
				if (stack.indexOf(char) == -1) {
					stack.push(char);
				} else {
					exp = beg[end.indexOf(char)];
					if (stack.pop() !== exp) {
						return false;
					}
				}
			}else {
				stack.push(char);
			}
		} else if (end.indexOf(char) > -1) {
			exp = beg[end.indexOf(char)];
			if (stack.length === 0 || stack.pop() !== exp) {
				return false;
			}
		}
	}
	return (stack.length === 0);
}
