# discord-bot

## command structure:

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
