const ejs = require('ejs')
const fs = require('fs')

// const html = ejs.render('<h1><%= xavier %></h1>', { xavier: 1234 })
// console.log(html); //<h1>1234</h1>


// Renderizando com ejs
ejs.renderFile('./template.ejs', {
    items: ['Lucas', 'xavier']
}, (err, html) => {
    fs.writeFile('template.html', html, (err) => {
        console.log('Arquivo criado');
    })
})