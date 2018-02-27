const express = require('express')
const multer = require('multer')
const path = require('path')
const shortid = require('shortid')
const config = require('dotenv').config()
const cors = require('cors')

const app = express()
const port = process.env.port || 3000
const host_url = process.env.host_url || 'https://static.oonnnoo.com/upload/images/'

// 校验文件
function checkFile(file, callback) {
  // 允许的后缀名
  const fileTypes = /jpeg|jpg|gif|png/
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  // 检查mimetype
  const mimetype = fileTypes.test(file.mimetype)
  // // 图片大小限制10MB
  // const fileSize = 10*1000*1000
  // console.log(req)
  if (extname && mimetype) {
    return callback(null, true)
  } else {
    callback('Images Only')
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './storage/images/')
  },
  filename: function (req, file, callback) {
    callback(null, (shortid.generate() + path.extname(file.originalname)))
  }
})

const upload = multer({
  storage: storage,
  limits: {
    files: 1,
    // 限制文件的大小为10MB
    fileSize: 10 * 1024 * 1024,
    fields: 1
  },
  fileFilter: function (req, file, callback) {
    checkFile(file, callback)
  }
}).single('upfile')

app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(__dirname +'/public/index.html');
})

app.post('/upload',cors(), (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send({
        code: 'error',
        msg: err.code || err
      })
    } else {
      res.send({
        code: 'success',
        data: {
          originalname: req.file.originalname,
          mimetype: req.file.mimetype,
          filename: req.file.filename,
          size: req.file.size,
          url: host_url + req.file.filename,
        }
      })
    }
  })
})

app.listen(port, () => console.log(`Server started on port ${port}`))
