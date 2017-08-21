# node-reveal [![NPM version][npm-image]][npm-url]
Node CLI for [reveal.js](https://github.com/hakimel/reveal.js)

[A Real DEMO](https://github.com/int64ago/wasm)

## Feature

 - Fast and simple, almost one command
 - ONLY generate necessary files
 - Server in watch mode, auto reload during editing
 - Enable multiplex by default

## Usage

`npm i node-reveal -g` (or `yarn global add node-reveal`)

```text
$ reveal -h
Options:
  -i, --init     Create a new project.                  [default: "reveal-demo"]
  -w, --watch    Server in watch mode.                          [default: false]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

```

#### Start

  - Init project: `reveal -i <your_project_name>`
  - Go to project directory: `cd <your_project_name>`
  - Server in watch mode: `reveal -w`

#### Quick start :heart:

  - Init project with default name: `reveal`
  - Go to project directory: `cd reveal-demo`
  - Server in watch mode: `reveal`

## Tips

 - ENOSPC error

`node-reveal` uses `node-watch` under the hood, for the limit of OS, you need to increase watchers limit manually, see [this](https://github.com/yuanchuan/node-watch/issues/48) for detail.


## GIF show

 - ONLY generate files needed
![](https://cloud.githubusercontent.com/assets/2230882/23828880/15b6c702-071b-11e7-88ac-d9d8605773c5.gif)

 - Create a project & server in watch mode
![](https://cloud.githubusercontent.com/assets/2230882/23828879/15b638d2-071b-11e7-8cbe-13c7e4b45ffc.gif)

 - Auto reload during editing
![](https://cloud.githubusercontent.com/assets/2230882/23828882/15f63586-071b-11e7-9086-4c7ece9d7c83.gif)

 - Enable multiplex in an elegant way
![](https://cloud.githubusercontent.com/assets/2230882/23828881/15f56570-071b-11e7-9062-0c4ffbf1734f.gif)

## License
MIT


[npm-url]: https://npmjs.org/package/node-reveal
[npm-image]: https://img.shields.io/npm/v/node-reveal.svg?style=flat-square
