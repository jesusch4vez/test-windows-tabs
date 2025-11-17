import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        specPattern: "test/cypress/**/*.js",
        supportFile: "test/cypress/support/e2e.ts",
        setupNodeEvents(on, config) {
        }
    }
});
