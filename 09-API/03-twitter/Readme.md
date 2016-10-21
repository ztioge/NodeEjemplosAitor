###Twitter bot

To run, create the file: env.js with this content:
```
process.env['CONSUMER_KEY'] = ""
process.env['CONSUMER_SECRET'] = ""
process.env['ACCESS_TOKEN_KEY'] = ""
process.env['ACCESS_TOKEN_SECRET'] = ""
```
Then
```
$ node app.js
```

#### In Openshift
Create then environment variables:

https://developers.openshift.com/en/managing-environment-variables.html

#### .gitignore
Insert in [.gitignore](https://github.com/zmwebdev/node-express-examples/blob/master/.gitignore) the env.js file
