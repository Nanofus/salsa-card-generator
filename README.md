# salsa-card-generator
Angular app to generate cards for the card game "Salsa" from spreadsheet data. Can also be used as an example for using an Angular app as a card game card generator. Finalized cards for Salsa can be found here: http://bioklaani.fi/salsa

## Usage
Install Angular with npm first!

1. Have your card data in a spreadsheet and export it as CSV.
2. Convert your CSV to JSON. (Use [this](http://www.convertcsv.com/csv-to-json.htm), for example. Set "First row is column names" to true.)
3. Save the data as `data.json` in the `public_html` folder
4. Open `index.html` and tweak the javascript and css to suit your needs.
5. Print the page. Normal printing from the browser doesn't work because of javascript, you have to use a page capturing software such as [Fireshot](http://getfireshot.com/).

## Other info

- Background image size: 822 x 1122 px (including borders as seen in the examples)
- Card image size: 564 x 400 px
