const { expect } = require('chai');
const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];
function print_color_map(colorMap) {
	for (const colorNumber in colorMap) {
		console.log(
			`${colorNumber} | ${colorMap[colorNumber].majorColor} | ${colorMap[colorNumber].minorColor}`
		);
	}
	return Object.keys(colorMap).length;
}

function findColorMap(majorColors, minorColors) {
	colorMap = {};
	for (let i = 0; i < majorColors.length; i++) {
		for (let j = 0; j < minorColors.length; j++) {
			colorMap[i * 5 + j + 1] = {
				majorColor: majorColors[i],
				minorColor: minorColors[j],
			};
		}
	}
	return colorMap;
}

expect(print_color_map(findColorMap(majorColors, minorColors))).equals(26);
console.log('All is well (maybe!)');
