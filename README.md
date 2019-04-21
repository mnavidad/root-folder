# root-folder
ESRI JS typescript example in 4.11

This example was extended from original example. If you are GIS developer you and you work on the ESRI platform you can create an account https://developers.arcgis.com/ and view the original example that displayed only the basemap https://developers.arcgis.com/javascript/latest/guide/typescript-setup/

Prerequisites
The recommended way to install TypeScript is via Node and npm. The package manager npm is used to install various libraries and tools.

Make sure to install TypeScript globally using npm install -g typescript. This will install a command line tool called tsc that will be used to compile your TypeScript code. You can then check you have TypeScript installed by using tsc -v and it should tell you the version of TypeScript you have installed.

Folder structure
We recommend you use the following folder structure for your application.

root-folder/
  index.html
  package.json
  tsconfig.json
  app/
    main.ts
    
 Install the ArcGIS API for JavaScript Typings
You can run the following commands in the root of your application.

npm init --yes
npm install --save @types/arcgis-js-api
The first command will create a package.json in your folder. The second command will install the typings for the JavaScript API from npm into a node_modules folder. If you want to learn more about TypeScript Declaration Files, you can read more here.

If you're upgrading an app from a previous version of the API to the latest version you can run the following command in your TypeScript project.

npm install @types/arcgis-js-api@latest --save-exact

or if wanting to target a specific version, run

npm install @types/arcgis-js-api@4.[subversion-number-here] --save-exact

The web has an abundance of useful information regarding how to work with npm. An Absolute Beginners Guide to Using npm and How to Update npm Packages to their Latest Version are just a couple sites that discuss working with npm.

Install Dojo 1 Typings (Optional)
You can optionally install Dojo 1 Typings to use Dojo 1 with TypeScript. See How to use for more detailed steps and README.md for more information.

Run the following command in the root of your application to quickly install.

npm install dojo-typings --save-dev

Compile TypeScript
tsconfig
Before you can compile TypeScript to JavaScript, you will need to configure the TypeScript compiler. You can do this by creating a tsconfig.json file.

Here is a sample tsconfig.json you could use for writing ArcGIS API 4 for JavaScript applications.

{
  "compilerOptions": {
    "module": "amd",
    "noImplicitAny": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "jsx": "react",
    "jsxFactory": "tsx",
    "target": "es5",
    "experimentalDecorators": true,
    "preserveConstEnums": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "include": [
    "./app/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
The options of the tsconfig.json are the same as the options passed to the TypeScript compiler. Without going into too much detail, the important options to take note of are as follows:

compilerOptions.esModuleInterop - When true, allows use of import syntax such as import x from 'xyz'.
compilerOptions.module - Will compile TypeScript code to AMD modules as needed by the JavaScript API.
compilerOptions.target - Output to ES5 to work across all supported browsers.
include - Array of files to compile. Can use glob-like file patterns.
"noImplicitUseStrict": true. See Mozilla strict mode documentation for further information regarding working in strict mode.

For more details, please refer to the tsconfig.json documentation.

Compile
In the root of your application, you can run the following command.

tsc - This command will look at your tsconfig.json file and compile your TypeScript based on its configuration.
tsc -w - This command does the same as above, but will also watch for file changes and recompile files as you edit them.
You are now ready to start writing TypeScript applications.

As your development needs grow, you can also use task runners, such as Grunt or Gulp.


Editor
A very popular editor for writing TypeScript is Visual Studio Code. Code has robust TypeScript integration that can assist you while you build your application. Using the application from this demo in Code, you can configure a task runner to compile TypeScript for you.


