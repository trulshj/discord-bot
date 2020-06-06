module.exports = {
    name: 'grillkonge',
    aliases: ['gk', 'grillkongen'],
    description: 'Poster et bilde av selveste grillkongen',
    execute(message, args) {
        const food = ['pølser', 'hamburger', 'ostepølse', 'stek'];
        message.channel.send(`Nam nam, jeg lukter ${food[Math.floor((Math.random()*food.length))]}!`, {files: ['./images/grillkongen.PNG']});
    },
};
