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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome_1 = require("selenium-webdriver/chrome");
var environment_1 = require("../environments/environment");
function loginTest(driver) {
    return __awaiter(this, void 0, void 0, function () {
        var boton, currentUrl, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 11]);
                    console.log("\nIntentando ingresar a la página...", environment_1.environment.url_front);
                    return [4 /*yield*/, driver.get(environment_1.environment.url_front)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 3:
                    _a.sent();
                    console.log("Intentando ingresar usuario y contraseña...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys('user@gmail.com')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 6:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 7:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 9:
                    currentUrl = _a.sent();
                    return [2 /*return*/, currentUrl === environment_1.environment.url_front + '/home'];
                case 10:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    return [2 /*return*/, false];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function registerTest(driver) {
    return __awaiter(this, void 0, void 0, function () {
        var registro, email, boton, boton2, currentUrl, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 20, , 21]);
                    console.log("Intentando ingresar a la página...", environment_1.environment.url_front);
                    return [4 /*yield*/, driver.get(environment_1.environment.url_front)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 2:
                    _a.sent();
                    // click the a element with id "registro"
                    console.log("Intentando ingresar a la página de registro...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('registro')), 500)];
                case 3:
                    registro = _a.sent();
                    return [4 /*yield*/, registro.click()];
                case 4:
                    _a.sent();
                    // check if the element with id "exampleInputEmail" is present
                    console.log("Esperando página de registro...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('exampleInputEmail')), 5000)];
                case 5:
                    _a.sent();
                    console.log("Intentando ingresar datos...");
                    email = 'test' + Math.random() + '@gmail.com';
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys(email)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123123')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleRepeatPassword')).sendKeys('123123')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleFirstName')).sendKeys('test')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleLastName')).sendKeys('test')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnRegistro')), 500)];
                case 11:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 12:
                    _a.sent();
                    // check if it got redirected to login page and try to login
                    console.log("Esperando página de inicio de sesión...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('exampleInputEmail')), 5000)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys(email)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123123')];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 16:
                    boton2 = _a.sent();
                    return [4 /*yield*/, boton2.click()];
                case 17:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 19:
                    currentUrl = _a.sent();
                    return [2 /*return*/, currentUrl === environment_1.environment.url_front + '/home'];
                case 20:
                    error_2 = _a.sent();
                    console.error('Error:', error_2);
                    return [2 /*return*/, false];
                case 21: return [2 /*return*/];
            }
        });
    });
}
function crearProductoTest(driver) {
    return __awaiter(this, void 0, void 0, function () {
        var boton, currentUrl, productos, agregar, modal, nombreProducto, crear, home, producto, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 31, , 32]);
                    console.log("Intentando ingresar a la página...", environment_1.environment.url_front);
                    return [4 /*yield*/, driver.get(environment_1.environment.url_front)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 3:
                    _a.sent();
                    console.log("Intentando ingresar usuario y contraseña...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys('user@gmail.com')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 6:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 7:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 9:
                    currentUrl = _a.sent();
                    if (!(currentUrl === environment_1.environment.url_front + '/home')) return [3 /*break*/, 29];
                    //click the a element with id "btnProductos"
                    console.log("Intentando ingresar a la página de productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnProductos')), 500)];
                case 10:
                    productos = _a.sent();
                    return [4 /*yield*/, productos.click()];
                case 11:
                    _a.sent();
                    // check if the element with id "btnAgregar" is present
                    console.log("Esperando página de productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAgregar')), 5000)];
                case 12:
                    _a.sent();
                    //click the a element with id "btnAgregar"
                    console.log("Intentando ingresar a la página de agregar productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAgregar')), 500)];
                case 13:
                    agregar = _a.sent();
                    return [4 /*yield*/, agregar.click()];
                case 14:
                    _a.sent();
                    // check if the modal modal-agregar-producto is present
                    console.log("Esperando modal de agregar productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('modal-agregar-producto')), 5000)];
                case 15:
                    modal = _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 16:
                    _a.sent();
                    console.log("Intentando ingresar nombre...");
                    nombreProducto = 'test' + Math.random();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('nombreProducto')).sendKeys(nombreProducto)];
                case 17:
                    _a.sent();
                    console.log("Intentando ingresar precio...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('precioMinimo')).sendKeys('1000')];
                case 18:
                    _a.sent();
                    console.log("Intentando ingresar descripción...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('descripcionProducto')).sendKeys('test')];
                case 19:
                    _a.sent();
                    console.log("Intentando ingresar fecha..");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('fechaTermino')).sendKeys('31122027')];
                case 20:
                    _a.sent();
                    // click the button with id btnCrearProducto 
                    console.log("Intentando crear producto...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnCrearProducto')), 500)];
                case 21:
                    crear = _a.sent();
                    return [4 /*yield*/, crear.click()];
                case 22:
                    _a.sent();
                    driver.sleep(1000);
                    // go back to home with btnHome and check if the product was created
                    console.log("Esperando página de inicio...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnHome')), 5000)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnHome')), 500)];
                case 24:
                    home = _a.sent();
                    return [4 /*yield*/, home.click()];
                case 25:
                    _a.sent();
                    // check if the product is present in the home page by writing its name in searchBar and checking if it is present by its name as text
                    console.log("Intentando buscar producto...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('searchBar')).sendKeys(nombreProducto)];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("//*[contains(text(), '".concat(nombreProducto, "')]")))];
                case 28:
                    producto = _a.sent();
                    return [2 /*return*/, producto !== null];
                case 29: return [2 /*return*/, false];
                case 30: return [3 /*break*/, 32];
                case 31:
                    error_3 = _a.sent();
                    console.error('Error:', error_3);
                    return [2 /*return*/, false];
                case 32: return [2 /*return*/];
            }
        });
    });
}
function eliminarProductoTest(driver) {
    return __awaiter(this, void 0, void 0, function () {
        var boton, currentUrl, productos, agregar, modal, nombreProducto, crear, eliminar, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 28, , 29]);
                    console.log("Intentando ingresar a la página...", environment_1.environment.url_front);
                    return [4 /*yield*/, driver.get(environment_1.environment.url_front)];
                case 1:
                    _a.sent();
                    // maximize the window
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 2:
                    // maximize the window
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 3:
                    _a.sent();
                    console.log("Intentando ingresar usuario y contraseña...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys('user@gmail.com')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 6:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 7:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 9:
                    currentUrl = _a.sent();
                    if (!(currentUrl === environment_1.environment.url_front + '/home')) return [3 /*break*/, 26];
                    //click the a element with id "btnProductos"
                    console.log("Intentando ingresar a la página de productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnProductos')), 500)];
                case 10:
                    productos = _a.sent();
                    return [4 /*yield*/, productos.click()];
                case 11:
                    _a.sent();
                    // check if the element with id "btnAgregar" is present
                    console.log("Esperando página de productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAgregar')), 5000)];
                case 12:
                    _a.sent();
                    //click the a element with id "btnAgregar"
                    console.log("Intentando ingresar a la página de agregar productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAgregar')), 500)];
                case 13:
                    agregar = _a.sent();
                    return [4 /*yield*/, agregar.click()];
                case 14:
                    _a.sent();
                    // check if the modal modal-agregar-producto is present
                    console.log("Esperando modal de agregar productos...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('modal-agregar-producto')), 5000)];
                case 15:
                    modal = _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 16:
                    _a.sent();
                    console.log("Intentando ingresar nombre...");
                    nombreProducto = 'test' + Math.random();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('nombreProducto')).sendKeys(nombreProducto)];
                case 17:
                    _a.sent();
                    console.log("Intentando ingresar precio...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('precioMinimo')).sendKeys('1000')];
                case 18:
                    _a.sent();
                    console.log("Intentando ingresar descripción...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('descripcionProducto')).sendKeys('test')];
                case 19:
                    _a.sent();
                    console.log("Intentando ingresar fecha..");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('fechaTermino')).sendKeys('31122027')];
                case 20:
                    _a.sent();
                    // click the button with id btnCrearProducto 
                    console.log("Intentando crear producto...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnCrearProducto')), 500)];
                case 21:
                    crear = _a.sent();
                    return [4 /*yield*/, crear.click()];
                case 22:
                    _a.sent();
                    driver.sleep(1000);
                    // search for btnEliminar + nombreProducto and click it
                    console.log("Intentando eliminar producto...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnEliminar' + nombreProducto)), 500)];
                case 23:
                    eliminar = _a.sent();
                    return [4 /*yield*/, eliminar.click()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 25:
                    _a.sent();
                    return [2 /*return*/, true];
                case 26: return [2 /*return*/, false];
                case 27: return [3 /*break*/, 29];
                case 28:
                    error_4 = _a.sent();
                    console.error('Error:', error_4);
                    return [2 /*return*/, false];
                case 29: return [2 /*return*/];
            }
        });
    });
}
function realizarPujaTest(driver) {
    return __awaiter(this, void 0, void 0, function () {
        var boton, currentUrl, producto, precioActual, precioActualNumber, precioActualString, aceptar, aceptar2, precioActual2, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 25, , 26]);
                    console.log("Intentando ingresar a la página...", environment_1.environment.url_front);
                    return [4 /*yield*/, driver.get(environment_1.environment.url_front)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 2:
                    _a.sent();
                    console.log("Intentando ingresar usuario y contraseña...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputEmail')).sendKeys('user@gmail.com')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('exampleInputPassword')).sendKeys('123')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('myBtn')), 500)];
                case 5:
                    boton = _a.sent();
                    return [4 /*yield*/, boton.click()];
                case 6:
                    _a.sent();
                    // check if the element with id "userDropdown" is present
                    console.log("Esperando inicio de sesión..");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('userDropdown')), 5000)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 8:
                    currentUrl = _a.sent();
                    if (!(currentUrl === environment_1.environment.url_front + '/home')) return [3 /*break*/, 23];
                    //search for the text "Tanque Soviético" 
                    console.log("Intentando ingresar a la página del producto...");
                    // click in the position of the text "Tanque Soviético"
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('searchBar')).sendKeys("Soviético")];
                case 9:
                    // click in the position of the text "Tanque Soviético"
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("//*[contains(text(), \"Sovi\u00E9tico\")]"))];
                case 11:
                    producto = _a.sent();
                    return [4 /*yield*/, producto.click()];
                case 12:
                    _a.sent();
                    //check if the url contains the text "detalle"
                    console.log("Esperando página del producto...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.urlContains('detalle'), 5000)];
                case 13:
                    _a.sent();
                    //search for the number in the element with id "precioActual" and save it
                    console.log("Intentando ingresar puja...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('precioActual')).getText()];
                case 14:
                    precioActual = _a.sent();
                    precioActualNumber = parseInt(precioActual.split('$')[1]);
                    precioActualNumber++;
                    precioActualString = precioActualNumber.toString();
                    //delete the text in the element montoPuja
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('montoPuja')).clear()];
                case 15:
                    //delete the text in the element montoPuja
                    _a.sent();
                    //enter precioActualString in the element montoPuja
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('montoPuja')).sendKeys(precioActualString)];
                case 16:
                    //enter precioActualString in the element montoPuja
                    _a.sent();
                    //click the button with id btnAceptarPuja
                    console.log("Aceptando puja...");
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAceptarPuja')), 1000)];
                case 17:
                    aceptar = _a.sent();
                    // scroll if necessary so that the button is visible
                    return [4 /*yield*/, driver.executeScript("arguments[0].scrollIntoView(true);", aceptar)];
                case 18:
                    // scroll if necessary so that the button is visible
                    _a.sent();
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.id('btnAceptarPuja')), 1000)];
                case 19:
                    aceptar2 = _a.sent();
                    return [4 /*yield*/, aceptar2.click()];
                case 20:
                    _a.sent();
                    //wait and check if the new precioActual is equal to precioActualString}
                    return [4 /*yield*/, driver.sleep(1000)];
                case 21:
                    //wait and check if the new precioActual is equal to precioActualString}
                    _a.sent();
                    console.log("Chequeando puja realizada...");
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('precioActuadfl')).getText()];
                case 22:
                    precioActual2 = _a.sent();
                    return [2 /*return*/, precioActual2.split('$')[1] === precioActualString];
                case 23: return [2 /*return*/, false];
                case 24: return [3 /*break*/, 26];
                case 25:
                    error_5 = _a.sent();
                    console.error('Error:', error_5);
                    return [2 /*return*/, false];
                case 26: return [2 /*return*/];
            }
        });
    });
}
function executeTests() {
    return __awaiter(this, void 0, void 0, function () {
        var successCounter, testFunctions, testCounter, chromeOptions, driver, _i, testFunctions_1, test, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    successCounter = 0;
                    testFunctions = [loginTest, registerTest, crearProductoTest, eliminarProductoTest, realizarPujaTest];
                    testCounter = testFunctions.length;
                    chromeOptions = new chrome_1.Options();
                    return [4 /*yield*/, new selenium_webdriver_1.Builder()
                            .forBrowser('chrome')
                            .setChromeOptions(chromeOptions)
                            .build()];
                case 1:
                    driver = _a.sent();
                    _i = 0, testFunctions_1 = testFunctions;
                    _a.label = 2;
                case 2:
                    if (!(_i < testFunctions_1.length)) return [3 /*break*/, 5];
                    test = testFunctions_1[_i];
                    return [4 /*yield*/, test(driver)];
                case 3:
                    result = _a.sent();
                    if (result) {
                        successCounter++;
                        // print test name success in color green
                        console.log('\x1b[32m%s\x1b[0m', test.name + ' exitoso\n');
                    }
                    else {
                        // print test name failure in color red
                        console.log('\x1b[31m%s\x1b[0m', test.name + ' fallido\n');
                    }
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    driver.quit();
                    // print the number of successful tests in color green only if the amount of successful tests is less than the total amount of tests
                    if (successCounter == testCounter) {
                        console.log('\x1b[32m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
                    }
                    else {
                        console.log('\x1b[31m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
executeTests();
