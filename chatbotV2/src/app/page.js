"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chat_1 = require("@/components/Chat");
var Providers_1 = require("@/components/Providers");
var Home = function () {
    return (<Providers_1.default>
			<Chat_1.default />
		</Providers_1.default>);
};
exports.default = Home;
