import fs from 'fs'
import htmlToPdf from 'wkhtmltopdf'
import marked from 'marked'

const options = {
  encoding: 'utf-8',
  pageSize: 'Letter',
  output: 'out.pdf'
}

const page = process.argv[2] === 'marked' ?
             marked(fs.readFileSync('./page.md').toString()) :
             fs.readFileSync('./page.html').toString()

htmlToPdf(page, options)
