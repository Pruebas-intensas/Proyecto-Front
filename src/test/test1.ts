import { WebDriver, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

async function loginTest() {
    const chromeOptions = new Options();
    const driver: WebDriver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    try {
        console.log("\nIntentando ingresar a la página...");
        await driver.get('https://pruebas-intensas.github.io/');
        await driver.sleep(1000);
        // escribir en nombre de usuario y contraseña en las casillas de id exampleInputEmail y exampleInputPassword
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
        driver.quit();
        return currentUrl === 'https://pruebas-intensas.github.io/home';        
    } catch (error) {
        //console.error('Error:', error);
        driver.quit();
        return false;
    }  
}

console.log("Iniciando Login Test");
loginTest().then((result) => {
    console.log("Resultado Login Test:",result);
}
);
