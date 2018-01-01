# contacts-pen

A contacts application using postgreSQL, knex, express, node.

---

## Table of Contents

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Usage

### Getting Started

Make sure you have the main dependencies:

- [Git](http://git-scm.com/downloads)
- [NodeJS](http://nodejs.org/)

Clone this repository:

```sh
$ git clone https://github.com/falcaoaugustos/contacts-pen.git
```

Install all dependencies:

```sh
$ cd contacts-pen
$ npm install
$ node server/index.js <USER> <PASSWORD> <DATABASE>
```

### Structure

If everything from the [Getting Started](#getting-started) section goes well, you should have this:

```
|-- server/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- db-config.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- [...]
```

### Resource List

Calling any API endpoint without a resource ID will return a paginated list of available resources for that API.

### Contacts

The standard contact informations witch the user want to save.

GET contacts/{id}
```json
{
  "id": 3,
  "first_name": "Abel",
  "last_name": "Rose",
  "email": "rose@domain.com",
  "phone": "1111-2222",
  "country": "Brazil"
}
```

| Key | Value Data Type |
| --- | --------------- |
| id | number |
| first_name | string |
| last_name | string |
| email | string |
| phone | string |
| country | string |

## Contributing

Contributions are very welcome! If you'd like to contribute, feel free to send a pull request!

## License

contacts-pen is released under an MIT license. See LICENSE file for more information.