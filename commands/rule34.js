const fetch = require('node-fetch');

module.exports = {
    name: 'rule34',
    aliases: ['r34'],
    description: 'You know what this does...',
    usage: '[search term]',
    execute(message, args) {

        fetch(`https://r34-json-api.herokuapp.com/posts?limit=25&tags=${args.join('_')}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const post = data[Math.floor(Math.random() * 25)];
                console.info('Post URL', post.file_url);
                message.channel.send({files: [post.file_url]});
            })
            .catch(err => {
                console.error(err);
            });
    },
};
