import htmlToPdf from 'wkhtmltopdf'
import fs from 'fs'

const options = {
  encoding: 'utf-8',
  pageSize: 'Letter',
  output: 'out.pdf'
}

const page = fs.readFileSync('./page.html').toString()

htmlToPdf(page, options)
