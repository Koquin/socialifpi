"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var mongoose_1 = require("mongoose");
var UsuarioSchema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
    },
    data_criacao: {
        type: Date,
        default: Date.now,
    },
});
// 3. Exporte o modelo usando 'export const' e tipagem com <IUser>
exports.Usuario = mongoose_1.default.model('Usuario', UsuarioSchema);
