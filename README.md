# WebAPI--MT799
## Introduction

The MT799 Web API documentation provides information about the web API that receives MT799 messages and writes them to an SQLite database. This API was designed to support the processing of MT799 messages and provides an easy way to write data to the database.

## Instalation and setup

1. Before using the web API, you must install the following Node.js packages:
   * express
   * sqlite3
   * multer
After you clone the repository run:
```bash
npm install express sqlite3 multer
```
## Start the server
Replace the port number with your own and then run:
```bash
node index.js
//if you have nodemon
nodemon index.js
```

## Using MT799 Web API
Upload MT799 message as file!

* Method: POST
* Path: '/upload'
* Parameters:
  * `mt799` - name of the file containing the MT799 message

If everithing is OK response status should be 200, if there is any error status should be 400!
