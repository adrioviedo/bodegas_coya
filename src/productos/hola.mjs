// import fs from 'fs'

// import products from '../components/products.json' with { type: 'json' }

// const updateProductImg = (products) => {
//   for (const category of products) {
//       category.img = category.img.replace('-', '_')
//       category.img = category.img.replace('.png', '.webp')
//       if (!category.denominations) {
//           for (const product of category.products) {
//               product.img=product.img.replace('.png', '.webp')
//           }
//       }
//       else {
//           for (const denomination of category.denominations) {
//               for (const product of denomination.products) {
//                   category.img = category.img.replace('-', '_')
//                   product.img=product.img.replace('.png', '.webp')
//               }
//           }
//       }
//   }
//   return products
// }

// const updatedProducts = updateProductImg(products)

// fs.writeFileSync('./products.json', JSON.stringify(updatedProducts, null, 2))
