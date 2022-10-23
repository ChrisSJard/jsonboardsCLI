# jsonboardsCLI
Technical Challenge: JSON Boards CLI

# The Challenge

You have been tasked with creating this command line tool that when given the path to any directory it will:

* Combine all board lists inside the JSON files into a single JSON output
* Order the board list alphabetically first by vendor, and then by name
* Include metadata in the JSON output under a _metadata object including:
** The total number of unique vendors
** The total number of boards
* Output the resultant JSON

If you are unsure on any requirements use your best judgement to determine the expected output. You should list any assumptions you have made.

## Assumptions
1. The form of the input file was not specified so a command line prompt was used to recieve input from user.
2. The output of the file was not specified where to save the outfile so the directory chosen was given.
3. The name of the output was not given so output.json was used.
4. The size of the size of directory was not specified so 0 <=N >= 10000.
5. It was assumed all JSON files in the directory were of the specified structure scheme.

## Getting Stared 
Using your preferred Version control software , clone this repository using git clone (Https or SSH).
This will clone jsonboardsCLI into your local directory. Open your terminal in the new directory labelled jsonboardsCLI.

## Installations
You will need to have nodeJS installed to run the command line interface.
Please use the link to find the downlaod page [NodeJS](https://nodejs.org/en/download/).

### Dependencies
node prompt - A command-line prompt for node.js.

## Getting Started
1. Open command terminal that has access to node. 
2. Run "npm i" to install node dependencies.
3. Next run "node boardCombiner.js"
4. Input your path to a directory containing the json files.
5. Successful run will display ""Output file generated" on the command line and generate an output folder as requested in the directory chosen.
6. Failed run would be catch and return to input another command until exitted.

## Built With
* [Node](https://nodejs.org/en/) - Dependency Management

