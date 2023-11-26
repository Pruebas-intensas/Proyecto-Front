import { WebDriver, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../environments/environment';

async function loginTest(driver: WebDriver) {
    try {
        console.log("\nIntentando ingresar a la página...", environment.url_front);
        await driver.get(environment.url_front);
        await driver.sleep(100);
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')), 60000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')), 60000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 60000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 60000);
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
        await driver.manage().window().maximize();

        // click the a element with id "registro"
        console.log("Intentando ingresar a la página de registro...");
        const registro = await driver.wait(until.elementLocated(By.id('registro')), 60000);
        await registro.click();
        // check if the element with id "exampleInputEmail" is present
        console.log("Esperando página de registro...");
        const email = 'test'+Math.random()+'@gmail.com';
        await driver.wait(until.elementLocated(By.id('InputEmail')),60000).sendKeys(email);
        await driver.wait(until.elementLocated(By.id('InputPassword')),60000).sendKeys('123123');
        await driver.wait(until.elementLocated(By.id('RepeatPassword')),60000).sendKeys('123123');
        await driver.wait(until.elementLocated(By.id('FirstName')),60000).sendKeys('test');
        await driver.wait(until.elementLocated(By.id('LastName')),60000).sendKeys('test');

        const boton = await driver.wait(until.elementLocated(By.id('btnRegistro')), 60000);
        await boton.click();

        // check if it got redirected to login page and try to login
        console.log("Esperando página de inicio de sesión...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')),60000).sendKeys(email);
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')),60000).sendKeys('123123');
        //press the button called myBtn
        const boton2 = await driver.wait(until.elementLocated(By.id('myBtn')), 60000);
        await boton2.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 60000);
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
        await driver.sleep(100);
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')),60000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')),60000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 60000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 60000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 60000);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 60000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 60000);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 60000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.wait(until.elementLocated(By.id('nombreProducto')),60000).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.wait(until.elementLocated(By.id('precioMinimo')),60000).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.wait(until.elementLocated(By.id('descripcionProducto')),60000).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.wait(until.elementLocated(By.id('fechaTermino')),60000).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 60000);
            await crear.click();

            driver.sleep(100);

            // go back to home with btnHome and check if the product was created
            console.log("Esperando página de inicio...");
            await driver.wait(until.elementLocated(By.id('btnHome')), 60000);
            const home = await driver.wait(until.elementLocated(By.id('btnHome')), 60000);
            await home.click();

            // check if the product is present in the home page by writing its name in searchBar and checking if it is present by its name as text
            console.log("Intentando buscar producto...");
            await driver.wait(until.elementLocated(By.id('searchBar')),60000).sendKeys(nombreProducto);
            await driver.sleep(100);
            const producto = await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${nombreProducto}')]`)),60000);
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
        // maximize the window
        await driver.manage().window().maximize();
        await driver.sleep(100);
        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')),60000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')),60000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 60000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 60000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //click the a element with id "btnProductos"
            console.log("Intentando ingresar a la página de productos...");
            const productos = await driver.wait(until.elementLocated(By.id('btnProductos')), 60000);
            await productos.click();

            // check if the element with id "btnAgregar" is present
            console.log("Esperando página de productos...");
            await driver.wait(until.elementLocated(By.id('btnAgregar')), 60000);

            //click the a element with id "btnAgregar"
            console.log("Intentando ingresar a la página de agregar productos...");
            const agregar = await driver.wait(until.elementLocated(By.id('btnAgregar')), 60000);
            await agregar.click();

            // check if the modal modal-agregar-producto is present
            console.log("Esperando modal de agregar productos...");
            // check if modal-agregar-producto is visible (display: block)
            const modal = await driver.wait(until.elementLocated(By.id('modal-agregar-producto')), 60000);
            await driver.sleep(1000);
            console.log("Intentando ingresar nombre...");
            let nombreProducto = 'test'+Math.random();
            await driver.wait(until.elementLocated(By.id('nombreProducto')),60000).sendKeys(nombreProducto);
            console.log("Intentando ingresar precio...");
            await driver.wait(until.elementLocated(By.id('precioMinimo')),60000).sendKeys('1000');
            console.log("Intentando ingresar descripción...");
            await driver.wait(until.elementLocated(By.id('descripcionProducto')),60000).sendKeys('test');     
            console.log("Intentando ingresar fecha..");
            await driver.wait(until.elementLocated(By.id('fechaTermino')),60000).sendKeys('31122027');

            // click the button with id btnCrearProducto 
            console.log("Intentando crear producto...");
            const crear = await driver.wait(until.elementLocated(By.id('btnCrearProducto')), 60000);
            await crear.click();

            driver.sleep(100);

            // search for btnEliminar + nombreProducto and click it
            console.log("Intentando eliminar producto...");
            const eliminar = await driver.wait(until.elementLocated(By.id('btnEliminar'+nombreProducto)), 60000);
            await eliminar.click();
            await driver.sleep(100)
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
        await driver.manage().window().maximize();

        console.log("Intentando ingresar usuario y contraseña...");
        await driver.wait(until.elementLocated(By.id('exampleInputEmail')),60000).sendKeys('user@gmail.com');
        await driver.wait(until.elementLocated(By.id('exampleInputPassword')),60000).sendKeys('123');
        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 60000);
        await boton.click();
        // check if the element with id "userDropdown" is present
        console.log("Esperando inicio de sesión..");
        await driver.wait(until.elementLocated(By.id('userDropdown')), 60000);
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl === environment.url_front+'/home'){
            //search for the text "Tanque Soviético" 
            console.log("Intentando ingresar a la página del producto...");
            // click in the position of the text "Tanque Soviético"
            await driver.wait(until.elementLocated(By.id('searchBar')),60000).sendKeys("Soviético");
            await driver.sleep(100);
            const producto = await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), 'Soviético')]`)), 60000);
            await producto.click();           
            //check if the url contains the text "detalle"
            console.log("Esperando página del producto...");
            await driver.wait(until.urlContains('detalle'), 10000);
            //search for the number in the element with id "precioActual" and save it
            console.log("Intentando ingresar puja...");
            const precioActual = await driver.wait(until.elementLocated(By.id('precioActual')), 60000).getText();
            // covert the precio actual to number and add one to it and convert it back to string
            let precioActualNumber = parseInt(precioActual.split('$')[1]);
            precioActualNumber++;
            let precioActualString = precioActualNumber.toString();
            //delete the text in the element montoPuja
            await driver.wait(until.elementLocated(By.id('montoPuja')), 60000).clear();
            //enter precioActualString in the element montoPuja
            await driver.wait(until.elementLocated(By.id('montoPuja')), 60000).sendKeys(precioActualString);
            //click the button with id btnAceptarPuja
            console.log("Aceptando puja...");
            const aceptar = await driver.wait(until.elementLocated(By.id('btnAceptarPuja')), 3000);
            // scroll if necessary so that the button is visible
            await aceptar.click();
            //wait and check if the new precioActual is equal to precioActualString}
            await driver.sleep(100);
            console.log("Chequeando puja realizada...");
            const precioActual2 = await driver.wait(until.elementLocated(By.id('precioActual')), 60000).getText();
            
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
    let testFunctions = [loginTest, registerTest, crearProductoTest, eliminarProductoTest, realizarPujaTest];
    let testCounter = testFunctions.length;

    const chromeOptions = new Options();
    chromeOptions.addArguments("--headless=new");
    chromeOptions.addArguments("--window-size=1920,1080");
    const driver: WebDriver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();        

    for (const test of testFunctions) {
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
    // print the number of successful tests in color green only if the amount of successful tests is less than the total amount of tests
    if (successCounter == testCounter){
        console.log('\x1b[32m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
    }
    else{
        console.log('\x1b[31m%s\x1b[0m', successCounter + '/' + testCounter + ' tests exitosos');
    }
}

executeTests();
