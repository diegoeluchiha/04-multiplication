# Multiplication Table App

This Node.js app generates multiplication tables with customizable options and can save them to a file.

## Features

- Generate multiplication tables for any base and limit.
- Optionally print the table to the console.
- Save the table to a file with custom destination and filename.
- Show the table output in the terminal.

## Usage

You can run the app using the following command:

```bash
node app.js --base=5 --limit=10 --print --show --destination=outputs --fileName=multiplication
```

Or using short flags:

```bash
node app.js -b 5 -l 10 -p -s -d outputs -f multiplication
```

## Options

| Option / Flag         | Description                                 | Default            |
| --------------------- | ------------------------------------------- | ------------------ |
| `--base`, `-b`        | Base number for multiplication table        | _required_         |
| `--limit`, `-l`       | Maximum multiplier                          | _required_         |
| `--print`, `-p`       | Save table to file                          | `false`            |
| `--show`, `-s`        | Show table in console                       | `false`            |
| `--destination`, `-d` | Directory to save the file                  | `"outputs"`        |
| `--fileName`, `-f`    | Name of the output file (without extension) | `"multiplication"` |

> **Note:**  
> If you use `--fileName` or `--destination` without enabling `--print`, a warning will be shown and those options will be ignored.

## Example

```bash
node app.js --base=7 --limit=12 --print --destination=tables --fileName=table-7
```

## License

```
MIT License

Copyright (c) 2024 Diego
```
