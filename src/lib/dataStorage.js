export function setLocalStorage(key, value) {
	return window.localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
	let value = window.localStorage.getItem(key);
	return JSON.parse(value)
}
