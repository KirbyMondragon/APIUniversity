"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes.ts
const express_1 = require("express");
const folioController_1 = require("./controllers/folioController");
const router = (0, express_1.Router)();
// Rutas para la API
router.get("/api", folioController_1.obtenerNuevoFolio);
exports.default = router;
