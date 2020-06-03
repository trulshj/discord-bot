# discord-bot
This is a small bot that I wrote and am maintaining for my friends Discord server

## command structure:
All of the commands for the bot are located in the <b>commands</b> directory.<br>
Each command is just a single <b>.js</b> file that exports an object containing information about the command.<br>
These files are then imported and handled in the main bot file, <b>index.js</b>

Below is the general structure of a command:
```javascript
module.exports = {
    name: '', // Name of the command
    aliases: [], // Aliases for the command
    description: '', // Description of what the command does
    usage: '', // Expected arguments
    cooldown: 3, // Cooldown of the command in seconds, defaults to 3
    execute(message, args) {
        // The actual execution of the command
    },
};
```
