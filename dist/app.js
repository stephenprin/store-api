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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const connectDb = db_1.connectDB;
//routes
const productRoute_1 = __importDefault(require("./routes/productRoute"));
app.use('/api/v1/product', productRoute_1.default);
//error handling
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});
//connecting too database and server
const PORT = process.env.PORT || 3500;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDb(process.env.DATABASE_URL);
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
        console.log('Connected to Database');
    }
    catch (err) {
        console.log(err);
    }
});
start();
