export function lessThanMinute(date) {
	const MINUTE = 1000 * 60;
	const aMinuteAgo = Date.now().valueOf() - MINUTE;
	const prevDate = Date.parse(date).valueOf();
	return prevDate > aMinuteAgo
}
