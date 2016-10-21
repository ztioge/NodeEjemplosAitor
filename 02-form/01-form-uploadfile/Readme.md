http://expressjs.com/en/api.html

In Express 4, req.files is no longer available on the req object by default. To access uploaded files on the req.files object, use a multipart-handling middleware like busboy, multer, formidable, multiparty, connect-multiparty, or pez.

https://www.npmjs.com/package/multer