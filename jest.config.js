module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
      "\\.(css|scss|less)$": "identity-obj-proxy"
  }    
};

