import { WebDriver, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../environments/environment';

async function loginTest(driver: WebDriver) {
    try {
        console.log("\nIntentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(1000);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('user@gmail.com');
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 5000);
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === environment.url_front+'/home';        
    } catch (error) {
        console.error('Error:', error);
        return false;
    }  
}

async function registerTest(driver: WebDriver) {
    try {
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        // click the a element with id "registro"
        console.log("Intentando ingresar a la página de registro...");
        const registro = await driver.wait(until.elementLocated(By.id('registro')), 500);
        await registro.click();
        // check if the element with id "exampleInputEmail" is present
        console.log("Esperando página de registro...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 5000);
        console.log("Intentando ingresar datos...");
        const email = 'test'+Math.random()+'@gmail.com';
        await driver.findElement(By.id('exampleInputEmail')).sendKeys(email);
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123123');
        await driver.findElement(By.id('exampleRepeatPassword')).sendKeys('123123');
        await driver.findElement(By.id('exampleFirstName')).sendKeys('test');
        await driver.findElement(By.id('exampleLastName')).sendKeys('test');

        const boton = await driver.wait(until.elementLocated(By.id('btnRegistro')), 500);
        await boton.click();

        // check if it got redirected to login page and try to login
        console.log("Esperando página de inicio de sesión...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 5000);
        await driver.findElement(By.id('exampleInputEmail')).sendKeys(email);
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123123');
        //press the button called myBtn
        const boton2 = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton2.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 5000);
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === environment.url_front+'/home';
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function crearProductoTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(1000);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('user@gmail.com');
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 5000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 500);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 5000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 500);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 5000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.findElement(By.id('nombreProducto')).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.findElement(By.id('precioMinimo')).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.findElement(By.id('descripcionProducto')).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.findElement(By.id('fechaTermino')).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 500);
            await crear.click();

            driver.sleep(1000);

            // go back to home with btnHome and check if the product was created
            console.log("Esperando página de inicio...");
            await driver.wait(until.elementLocated(By.id('btnHome')), 5000);
            const home = await driver.wait(until.elementLocated(By.id('btnHome')), 500);
            await home.click();

            // check if the product is present in the home page by writing its name in searchBar and checking if it is present by its name as text
            console.log("Intentando buscar producto...");
            await driver.findElement(By.id('searchBar')).sendKeys(nombreProducto);
            await driver.sleep(1000);
            const producto = await driver.findElement(By.xpath(`//*[contains(text(), '${nombreProducto}')]`));
            return producto !== null;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function eliminarProductoTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(1000);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('user@gmail.com');
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 5000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 500);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 5000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 500);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 5000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.findElement(By.id('nombreProducto')).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.findElement(By.id('precioMinimo')).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.findElement(By.id('descripcionProducto')).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.findElement(By.id('fechaTermino')).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 500);
            await crear.click();

            driver.sleep(1000);

            // search for btnEliminar + nombreProducto and click it
            console.log("Intentando eliminar producto...");
            const eliminar = await driver.wait(until.elementLocated(By.id('btnEliminar'+nombreProducto)), 500);
            await eliminar.click();
            await driver.sleep(1000)
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

async function realizarPujaTest(driver: WebDriver) {
    try{
        console.log("Intentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('user@gmail.com');
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 5000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //search for the text "Tanque Soviético" 
            console.log("Intentando ingresar a la página del producto...");
            // click in the position of the text "Tanque Soviético"
            await driver.findElement(By.id('searchBar')).sendKeys("Soviético");
            await driver.sleep(1000);
            const producto = await driver.findElement(By.xpath(`//*[contains(text(), "Soviético")]`));
            await producto.click();           
            //check if the url contains the text "detalle"
            console.log("Esperando página del producto...");
            await driver.wait(until.urlContains('detalle'), 5000);
            //search for the number in the element with id "precioActual" and save it
            console.log("Intentando ingresar puja...");
            const precioActual = await driver.findElement(By.id('precioActual')).getText();
            // covert the precio actual to number and add one to it and convert it back to string
            let precioActualNumber = parseInt(precioActual.split('$')[1]);
            precioActualNumber++;
            let precioActualString = precioActualNumber.toString();
            //delete the text in the element montoPuja
            await driver.findElement(By.id('montoPuja')).clear();
            //enter precioActualString in the element montoPuja
            await driver.findElement(By.id('montoPuja')).sendKeys(precioActualString);
            //click the button with id btnAceptarPuja
            console.log("Aceptando puja...");
            const aceptar = await driver.wait(until.elementLocated(By.id('btnAceptarPuja')), 500);
            await aceptar.click();
            //wait and check if the new precioActual is equal to precioActualString}
            await driver.sleep(1000);
            console.log("Chequeando puja realizada...");
            const precioActual2 = await driver.findElement(By.id('precioActual')).getText();
            return precioActual2.split('$')[1] === precioActualString;
        }
        else{
            return false;
        }
    }
    catch (error) {
        console.error('Error:', error);
        return false;
    }

}

async function executeTests() {
    let successCounter = 0;
    let testCounter = 0;
    let testFunctions = [loginTest, registerTest, crearProductoTest, eliminarProductoTest, realizarPujaTest];

    const chromeOptions = new Options();
    const driver: WebDriver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();

    for (const test of testFunctions) {
        testCounter++;
        const result = await test(driver);
        if (result) {
            successCounter++;
            // print test name success in color green
            console.log('\x1b[32m%s\x1b[0m', test.name + ' exitoso\n');
        } else {
            // print test name failure in color red
            console.log('\x1b[31m%s\x1b[0m', test.name + ' fallido\n');
        }
    }
    driver.quit();
    console.log('\x1b[32m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
}

executeTests();
