# AnotherCAS

Another computer algebra system. Started from Algebrite v1.3.0. Right now the goal is to make progress on the test library.

## Getting Started

### Installing

```bash
npm install
```

## Running the tests

```bash
npm test
```

## Building

```bash
npm run build
```

Output: `dist/index.js`

## Built With

- [TypeScript](http://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) - testing framework
- [tsup](https://tsup.egoist.dev/) - module bundler
- [ESLint](https://eslint.org/) - linter
- [Prettier](https://prettier.io/) - code formatter

## Built from Algebrite

The build for [algebrite](https://github.com/davidedc/Algebrite) concatenates files then transpiles from CoffeeScript. This project starts with the output file v1.3.0 from `dist` and works solely on the test library.

Once the test library runs well, the project will focus on creating a TypeScript version of algebrite. Or maybe something entirely different.

## Contributing

Pull Requests welcome.

## Authors

See also the list of [contributors](https://github.com/brianmickel/AnotherCAS/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Huge shout out to the original project Algebrite at https://github.com/davidedc/Algebrite
