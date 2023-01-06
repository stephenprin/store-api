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
exports.getAllProductStats = exports.getAllProducts = exports.createProduct = void 0;
const productSchema_1 = __importDefault(require("../model/productSchema"));
const apiQuery_1 = __importDefault(require("../utils/apiQuery"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const features = new apiQuery_1.default(productSchema_1.default.find(), req.query).filter().sort().limitFields().paginate();
    const product = yield features.query;
    res.status(200).json({
        data: {
            product,
            nbHits: product.length,
        }
    });
});
exports.getAllProducts = getAllProducts;
const getAllProductStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productSchema_1.default.find({}).sort('-name  price');
    res.status(200).json({
        data: {
            product,
            nbHits: product.length,
            message: 'hello from getAllProductStats'
        }
    });
});
exports.getAllProductStats = getAllProductStats;
