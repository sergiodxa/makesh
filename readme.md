# makesh
Tiny CLI program to initialize an application defining the application name and the framework to use.

## Installation
For install this CLI tool you need to write in your terminal:

```bash
sudo npm i -g makesh
```

## How to use
Once installed, you only need to do:

```bash
makesh [command] [options]
```

### Options
```
-h, --help     output usage information
-V, --version  output the version number
--path [path]  set path to create the file
```

The [path] is a string (with or without quotes) who set the relative rute where the file are going to be created, this path prevents the creation of a unique folder for the modules.

### Commands
```
	app
		Create a new application
```

#### app
This command init a prompt questions about the application name and the selected framework.

If the application already exists this command will move the existent application to a legacy folder inside the application folder.

## Tests
To run test you need to write in the terminal:

```bash
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2014 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
