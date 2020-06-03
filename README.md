# discord-bot

## command structure:

module.exports = {
    name: '&lt;name of the command&gt;',
    aliases: [],
    description: '&lt;description of what the command does&gt;',
    usage: &lt;expected arguments&gt;,
    cooldown: &lt;cooldown of the command in seconds&gt;,
    execute(message, args) {
        &lt;Actual execution of the command&gt;
    },
};
