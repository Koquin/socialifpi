"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postagem = void 0;
var mongoose_1 = require("mongoose");
var PostagemSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    autor: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    data: {
        type: Date,
        required: true,
        default: Date.now,
    },
    curtidas: {
        type: Number,
        default: 0,
        required: true,
    },
    comentarios: [
        {
            body: String,
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    compartilhadaDe: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Postagem',
        default: null,
    },
});
exports.Postagem = mongoose_1.default.model('Postagem', PostagemSchema);
