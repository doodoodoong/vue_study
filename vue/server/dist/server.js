"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const host = "localhost";
const port = 8000;
const NOTION_ACCESS_KEY = process.env.NOTION_ACCESS_KEY;
const NOTION_DB_ID = process.env.NOTION_DB_ID;
const server = http_1.default.createServer((req, res) => { var _a, req_1, req_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var _b, e_1, _c, _d;
    // Avoid CORS errors
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        // Will respond to queries to the domain root (like http://localhost/)
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify({ data: "success" }));
            break;
        case "/notion/database/read":
            axios_1.default
                .post(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {}, {
                headers: {
                    Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
                    "Notion-Version": "2022-02-22",
                },
            })
                .then((result) => {
                const contents = result.data.results;
                res.writeHead(200);
                res.end(JSON.stringify({ data: contents }));
            });
            break;
        case "/notion/database/write":
            const buffers = [];
            try {
                for (_a = true, req_1 = __asyncValues(req); req_1_1 = yield req_1.next(), _b = req_1_1.done, !_b;) {
                    _d = req_1_1.value;
                    _a = false;
                    try {
                        const chunk = _d;
                        buffers.push(chunk);
                    }
                    finally {
                        _a = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_a && !_b && (_c = req_1.return)) yield _c.call(req_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            const data = JSON.parse(Buffer.concat(buffers).toString());
            axios_1.default
                .post(`https://api.notion.com/v1/pages`, {
                parent: {
                    type: "database_id",
                    database_id: "312a8185681843a2a6d0fad4d03d9b59",
                },
                properties: {
                    id: {
                        title: [
                            {
                                text: {
                                    content: data.id,
                                },
                            },
                        ],
                    },
                    mood: {
                        rich_text: [
                            {
                                text: {
                                    content: data.mood,
                                },
                            },
                        ],
                    },
                    sleep: {
                        rich_text: [
                            {
                                text: {
                                    content: data.sleep,
                                },
                            },
                        ],
                    },
                },
            }, {
                headers: {
                    Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
                    "Notion-Version": "2022-02-22",
                },
            })
                .then((result) => {
                const contents = result.data.results;
                res.writeHead(200);
                res.end(JSON.stringify({ data: contents }));
            });
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
}); });
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
