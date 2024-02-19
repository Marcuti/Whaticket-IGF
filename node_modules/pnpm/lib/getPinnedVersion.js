"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (opts) => {
    if (opts.saveExact === true)
        return 'patch';
    return opts.savePrefix === '~' ? 'minor' : 'major';
};
//# sourceMappingURL=getPinnedVersion.js.map