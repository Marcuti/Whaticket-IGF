"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@pnpm/config");
const pnpmPkgJson_1 = require("./pnpmPkgJson");
async function default_1(cliArgs, opts) {
    const configs = await config_1.default({
        cliArgs,
        command: opts.command,
        packageManager: pnpmPkgJson_1.default,
    });
    configs.cliArgs = cliArgs;
    if (opts.excludeReporter) {
        delete configs.reporter; // This is a silly workaround because supi expects a function as opts.reporter
    }
    return configs;
}
exports.default = default_1;
//# sourceMappingURL=getConfigs.js.map