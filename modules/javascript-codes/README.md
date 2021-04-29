# JavaScript

![logo](res/logo.png)

# Contents

 - [let](modules/let)
 - [const](modules/const)
 - [Temporal Dead Zone - (Hoisting)](modules/temporal-dead-zone)
 - [Arrow Functions](modules/arrow-functions)
 - [Template Literal](modules/template-literal)
 - [Property Shorthand](modules/property-shorthand)
 - [Default Parameter](modules/default-parameter)
 - [Object Destructuring](modules/destructuring)

# Install

As soon as you clone the repository, just run the **npm build script** to download the project dependencies. These dependencies are modules that we will use in the project **(ESLint, husky)**.

```
npm run build
```

__package.json__  
```json
"scripts": {
  "build": "npm install eslint husky --save-dev"
}
```

## Setting hooks

Let's use husky in the project. But what is husky? It allows you to create git hooks more easily.


__hooks:__  
What are hooks? Hooks are some script that run before/after some git tasks. For example:  
  
 - commit.  
 - push.  
 - git fetch.  
  
__Husky Repository__  
https://github.com/typicode/husky  
  
Let's use only the __"prepush"__ to run __ESLint__ before a push, that is, before sending the files to our repository it will run ESLint in our project:  
  
__package.json__
```json  
"scripts": {
  "lint": "./node_modules/.bin/eslint *.js/../",
  "prepush": "npm run lint"
}
```  

---

**Rodrigo Leite -** *Software Engineer*
