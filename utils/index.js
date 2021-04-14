export function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0),
		i = arr.length,
		min = i - count,
		temp,
		index;
	while (i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
