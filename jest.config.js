module.exports = {
	moduleFileExtensions: [
		"js"
	],
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"enzyme.js"
	],
	coverageReporters: [
		"json",
		"lcov",
		"text",
		"text-summary"
	],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
		"\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
	}
};
