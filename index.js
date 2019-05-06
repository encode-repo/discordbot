const Discord = require('discord.js');
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

var request = require('request');

const token = 'NTczMTY5NjIzNzg5NDY5Njk4.XMm73A.MO_LD1agp_zRH9loOowI4Z7CXFc'

const PREFIX = '!';

bot.on('ready' , () => {
    bot.user.setUsername("Info bot");
    console.log('Client ready.');
    console.log(`Logged in as ${bot.user.tag}.`);
});


bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help': // WORKING
            message.channel.send('```css\nhelp - displays a list of available commands \ngeoip - returns information on a given ip address \ndnsresolve - returns the DNS records from a domain \nhost2ip - returns IP Address belonging to provided host \ncfresolve - bruteforces common subdomains to search for the real IP  \nmine2uuid - converts a minecraft username to UUID \nnightcore - returns a random nightcore song \nphonenumber - return information on a given number \nencrypt - encrypts a provided string in sha256 \nytstats - returns information about a provided youtube video \nanime - returns information about a provided anime \ncat - returns a random cat image \nyomama - returns a yomama joke```');
            break;
        
        case 'geoip': // WORKING
        request('https://get.geojs.io/v1/ip/geo/' + args[1] + '.json', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            var JsonObject = JSON.parse(body); // Print the HTML for the Google homepage.)
            string = '```css'
            string2 = '```'
            message.channel.send(`${string}\nIP: ${JsonObject.ip}  \nCountry: ${JsonObject.country} \nRegion: ${JsonObject.region} \nCountry code: ${JsonObject.country_code} \nCity: ${JsonObject.city} \nTimezone: ${JsonObject.timezone} \nContinent code: ${JsonObject.continent_code} \nOrgnization: ${JsonObject.organization} ${string2}`)});
            break;
       
        case 'nightcore': // WORKING
        request('https://api.apithis.net/nightcore.php', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            message.channel.send(body)});
            break;
        
        case 'encrypt': // WORKING
        request('https://api.apithis.net/encrypt.php?type=sha256&content=' + args[1], function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            string = '```css'
            string2 = '```'
            message.channel.send(`${string}\nHash: ${body} ${string2} `)});
            break;

        case 'host2ip': // WORKING
        request('https://api.apithis.net/host2ip.php?hostname=' + args[1], function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            string = '```css'
            string2 = '```'
            message.channel.send(`${string}\nIP: ${body} ${string2}`)});
            break;
        
        case 'mine2uuid': // WORKING
        request('https://api.apithis.net/name2uuid.php?name=' + args[1], function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            string = '```css'
            string2 = '```'
            message.channel.send(`${string}\nUUID: ${body} ${string2}`)});
            break;

        case 'phonenumber': // NOT WORKING
        //request('https://api.apithis.net/numberinfo.php?number=' + args[1], function (error, response, body) {
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', body);
            //string = '```css'
            //string2 = '```'
            message.channel.send('```css\nunder development...```');
            break;

        case 'cat': // WORKING
        request('http://aws.random.cat/meow' , function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            var JsonObject = JSON.parse(body); // Print the HTML for the Google homepage.)
            string = '```css'
            string2 = '```'
            message.channel.send(`${JsonObject.file}`)});
            break;
        case 'yomama': // WORKING
        request('https://api.apithis.net/yomama.php' , function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            //var JsonObject = JSON.parse(body); // Print the HTML for the Google homepage.)
            string = '```css'
            string2 = '```'
            message.channel.send(`${string}\n${body}${string2}`)});
            break;
    }
});

bot.login(token);