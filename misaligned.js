const { expect } = require('chai');
const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];
let colorMap = [];

class ColorMapper {
	static majorColorPadEnd = 0;
	static minorColorPadEnd = 0;
	static colorNumberPadEnd = 0;
	constructor(colorNumber, majorColor, minorColor) {
		this.colorNumber = colorNumber;
		this.majorColor = majorColor;
		this.minorColor = minorColor;
		ColorMapper.colorNumberPadEnd = ColorMapper.getPadEnd(
			this.colorNumber.toString(),
			ColorMapper.colorNumberPadEnd
		);
		ColorMapper.majorColorPadEnd = ColorMapper.getPadEnd(
			this.majorColor.toString(),
			ColorMapper.majorColorPadEnd
		);
		ColorMapper.minorColorPadEnd = ColorMapper.getPadEnd(
			this.minorColor.toString(),
			ColorMapper.minorColorPadEnd
		);
	}
	static getPadEnd(string, maxStringLen) {
		if (string.length > maxStringLen) {
			maxStringLen = string.length;
		}
		return maxStringLen;
	}
}
function print_color_map(colorMap) {
	colorMap.forEach((colorObj) => {
		colourFormatter(
			colorObj.colorNumber,
			ColorMapper.colorNumberPadEnd,
			colorObj.majorColor,
			ColorMapper.majorColorPadEnd,
			colorObj.minorColor,
			ColorMapper.minorColorPadEnd
		);
	});
	return Object.keys(colorMap).length;
}

function findColorMap(majorColors, minorColors) {
	for (let i = 0; i < majorColors.length; i++) {
		for (let j = 0; j < minorColors.length; j++) {
			colorMap.push(
				new ColorMapper(i * 5 + j + 1, majorColors[i], minorColors[j])
			);
		}
	}
	return colorMap;
}

function colourFormatter(
	colorNumber,
	colorNumberPadEnd,
	majorColor,
	majorColorPadEnd,
	minorColor,
	minorColorPadEnd
) {
	console.log(
		`${colorNumber.toString().padEnd(colorNumberPadEnd, ' ')} | ${majorColor
			.toString()
			.padEnd(majorColorPadEnd, ' ')} | ${minorColor
			.toString()
			.padEnd(minorColorPadEnd, ' ')}`
	);
}

expect(print_color_map(findColorMap(majorColors, minorColors))).equals(
	majorColors.length * minorColors.length
);
console.log('All is well (maybe!)');
