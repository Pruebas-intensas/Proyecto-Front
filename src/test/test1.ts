import { WebDriver, Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

async function example() {
    const chromeOptions = new Options();
    const driver: WebDriver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    try {
        await driver.get('https://pruebas-intensas.github.io/');
        await driver.sleep(1000);
        // escribir en nombre de usuario y contraseña en las casillas de id exampleInputEmail y exampleInputPassword
        await driver.findElement(By.id('exampleInputEmail')).sendKeys('user1@gmail.com');
        await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');

        //press the button called myBtn
        const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
        await boton.click();
        // check if the element with id "userDropdown" is present
        await driver.wait(until.elementLocated(By.id('userDropdown')), 500);

    } catch (error) {
        console.error('Error:', error);
    } 
}

// Llamar a la función de ejemplo
example();
