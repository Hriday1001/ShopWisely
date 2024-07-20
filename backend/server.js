
const puppeteer = require('puppeteer');

const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000

app.get('/products', (req, res) => {
    const request = (req.url);
    const productUrl = request.split('?url=')[1];
    // console.log((decodeURIComponent(productUrl)));
    run(decodeURIComponent(productUrl))
    .then((response) => res.send(response));
    // console.log(details);
    
//   res.send(details)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


async function run(productUrl) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${productUrl}`);

  const details = await page.evaluate((productUrl) => {
    const getPoints = (ele)=>{
      let useCasePoints = "";
      for(var i = 0;i < ele.children.length;i++){
        useCasePoints += ele.children[i].children[0].innerText
        useCasePoints += "."
      }
      return useCasePoints;
    }

    // const getRelatedProducts = (ele) => {
    //   const arr = [];
    //   for(var i = 0;i < ele.children.length;i++){
    //     arr.push(ele.children[i].baseURI)
    //   }
    //   return arr;
    // }
    
    const elementArr = Array.from(document.querySelectorAll('#a-page'), (e) => ({
        price : document.querySelector('.a-price-whole').innerText,
        title : document.querySelector('#productTitle').innerText,
        ratings: document.querySelector('#acrPopover').title,
        no_of_reviews: document.querySelector('#acrCustomerReviewText').innerText,
        image_url : document.getElementById('landingImage').src,
        category : document.getElementById('nav-subnav').children[0].children[0].innerText,
        currency : document.getElementsByClassName('a-price-symbol')[0].innerText,
        // description : (document.getElementById("productDescription").children[0].children[0].innerText),
        useCasePoints : getPoints(document.getElementById("feature-bullets").children[2]),
        // relatedProducts : getRelatedProducts(document.getElementsByClassName("a-carousel-viewport")[3].children[0])

    }))

    return elementArr;
    

  } , productUrl);

  
  // console.log(details);

  await browser.close();

  return details;


}

// run();
