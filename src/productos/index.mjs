// import {chromium} from 'playwright';
// import {writeFile} from 'fs/promises';

// const browser = await chromium.launch(
//     {headless: true}
// )

// const page = await browser.newPage();

// await page.goto('https://bodegascoya.es/nuestros-productos');

//  const sections = await page.$$eval('.elementor-section-content-middle',(result) => (
//      result.map((el) => {
//          const products =[...el.querySelectorAll('.wp-caption')];
//          products.map((product) => {
//              const name = product.querySelector('.wp-caption-text').textContent;
//              const img = product.querySelector('a').getAttribute('href');

//              return {
//                  name,
//                  img
//              }
//          })
//      }
//  ))
//  )

//  console.log(sections);
//  await browser.close();

// const products = await page.$$eval('figure',(result) => (
//     result.map((product) => {
//         const name = product.querySelector('.wp-caption-text').textContent;
//         const img = product.querySelector('a').getAttribute('href');

//         return {
//             name,
//             img
//         }
//     })
// ))

//  Guardar en un archivo JSON
// await writeFile('products.json', JSON.stringify(products, null, 2));

// console.log(products);
// await browser.close();
