module.exports = {
	collectCoverage: true,
	// collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	rootDir: "../",
	collectCoverage: false,
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js",
		"\\.(css|less)$": "<rootDir>/jest/mocks/fileMock.js",
	},
};