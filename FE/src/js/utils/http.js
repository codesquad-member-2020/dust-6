export default class Http {
	async get(url) {
		const response = await fetch(url);
		const resPromise = await response.json();
		return resPromise;
	}
}
