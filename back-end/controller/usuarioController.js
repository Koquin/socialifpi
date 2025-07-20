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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
var usuarioRepository = require("../repositories/usuarioRepository");
// GET /usuarios
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('GET /usuarios: Buscando todos os usuários...');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuarioRepository.findAll()];
            case 2:
                usuarios = _a.sent();
                console.log('GET /usuarios: Usuários encontrados:', usuarios.length);
                res.status(200).json(usuarios);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log('GET /usuarios: Erro ao buscar usuários.');
                res.status(500).json({ message: 'Erro ao buscar usuários', error: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
// GET /usuarios/:id
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("GET /usuarios/:id: Buscando usu\u00E1rio com ID: ".concat(req.params.id));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuarioRepository.findById(req.params.id)];
            case 2:
                usuario = _a.sent();
                if (!usuario) {
                    console.log('GET /usuarios/:id: Usuário não encontrado.');
                    return [2 /*return*/, res.status(404).json({ message: 'Usuário não encontrado' })];
                }
                console.log('GET /usuarios/:id: Usuário encontrado.');
                res.status(200).json(usuario);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log('GET /usuarios/:id: Erro na busca por ID.');
                res.status(500).json({ message: 'Erro ao buscar usuário', error: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
// POST /usuarios
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioData, novoUsuario, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('POST /usuarios: Recebida requisição de criação de usuário.');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                usuarioData = req.body;
                console.log('Dados recebidos para criação:', usuarioData);
                return [4 /*yield*/, usuarioRepository.create(usuarioData)];
            case 2:
                novoUsuario = _a.sent();
                console.log('POST /usuarios: Usuário criado com sucesso! ID:', novoUsuario._id);
                res.status(201).json(novoUsuario);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log('POST /usuarios: Erro na criação de usuário.');
                res.status(500).json({ message: 'Erro ao criar usuário', error: error_3 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
// PUT /usuarios/:id
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioData, usuarioAtualizado, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("PUT /usuarios/:id: Tentativa de atualiza\u00E7\u00E3o do usu\u00E1rio com ID: ".concat(req.params.id));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                usuarioData = req.body;
                console.log('Dados recebidos para atualização:', usuarioData);
                return [4 /*yield*/, usuarioRepository.update(req.params.id, usuarioData)];
            case 2:
                usuarioAtualizado = _a.sent();
                if (!usuarioAtualizado) {
                    console.log('PUT /usuarios/:id: Usuário não encontrado para atualização.');
                    return [2 /*return*/, res.status(404).json({ message: 'Usuário não encontrado' })];
                }
                console.log('PUT /usuarios/:id: Usuário atualizado com sucesso.');
                res.status(200).json(usuarioAtualizado);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log('PUT /usuarios/:id: Erro na atualização de usuário.');
                res.status(500).json({ message: 'Erro ao atualizar usuário', error: error_4 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
// DELETE /usuarios/:id
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioRemovido, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("DELETE /usuarios/:id: Tentativa de remo\u00E7\u00E3o do usu\u00E1rio com ID: ".concat(req.params.id));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usuarioRepository.remove(req.params.id)];
            case 2:
                usuarioRemovido = _a.sent();
                if (!usuarioRemovido) {
                    console.log('DELETE /usuarios/:id: Usuário não encontrado para remoção.');
                    return [2 /*return*/, res.status(404).json({ message: 'Usuário não encontrado' })];
                }
                console.log('DELETE /usuarios/:id: Usuário removido com sucesso.');
                res.status(200).json({ message: 'Usuário removido com sucesso' });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log('DELETE /usuarios/:id: Erro na remoção de usuário.');
                res.status(500).json({ message: 'Erro ao remover usuário', error: error_5 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
