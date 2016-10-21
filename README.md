node-express-examples
=====================
### Doc

http://nodejs.org/api/

http://expressjs.com/guide.html

http://www.nodebeginner.org/

https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton

https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make

https://www.coursera.org/learn/server-side-development


### Install nodejs

```
$ sudo apt-get install nodejs-legacy npm
```

[http://nodejs.org/](http://nodejs.org/)

```
from https://nodejs.org/download/

# apt-get install -y curl
# curl -SLO http://nodejs.org/dist/v0.12.4/node-v0.12.4-linux-x64.tar.gz
(# wget http://nodejs.org/dist/v0.12.4/node-v0.12.4-linux-x64.tar.gz)
# tar -C /usr/local --strip-components 1 -xzf node-v0.12.4-linux-x64.tar.gz
# rm node-v0.12.4-linux-x64.tar.gz
# node -v
# npm -v
```
OR
```
apt-get update
apt-get install curl
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs
```
OR
```
$ sudo apt-get install python-software-properties
$ sudo add-apt-repository ppa:chris-lea/node.js  
$ sudo apt-get update
$ sudo apt-get install nodejs
```
OR
```bash
$ sudo apt-get update  
$ sudo apt-get install nodejs  
$ sudo apt-get install nodejs-legacy
$ sudo apt-get install npm
```
update npm for EACCES error:
```
sudo chown -R $(whoami) ~/.npm
```

update npm:
```
$ sudo npm install -g npm
```

update node:
```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

#### nodemon

https://github.com/remy/nodemon

https://developer.chrome.com/devtools/index

```bash
$ sudo npm install -g nodemon
($ sudo chown -R $(whoami) ~/.npm)
$ nodemon app.js
``` 
#### debug:

https://github.com/node-inspector/node-inspector

```bash
$ sudo npm install -g node-inspector
$ node-debug app.js
```
debug + nodemon:
```
$ node-inspector &
$ nodemon --debug app.js
```
Using Vagrant:
```
$ node-debug --web-host 0.0.0.0 app.js 
OR
$ node-inspector &
$ node --debug app.js
(OR, $ node --debug-brk your-app.js)
```

#### Express
http://expressjs.com/

Express generator: http://expressjs.com/starter/generator.html

#### HTTP Request:

curl:

```bash
$ sudo apt-get install curl
```

Postman (chrome extension):

https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm

JSONViewe: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
