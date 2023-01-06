"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db = () => {
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default.connect(process.env.DATABASE_URL, () => {
        try {
            app.listen(PORT, () => {
                console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
            });
            console.log('Connected to Database');
        }
        catch (err) {
            console.log(err);
        }
    });
};
exports.db = db;
