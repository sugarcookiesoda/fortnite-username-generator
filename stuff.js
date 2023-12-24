// list of username thingies
var adjectives = ['gay', 'sussy', 'epic', 'sus', 'homophobic', 'cool', 'homo', 'fat', 'sexy', 'dumb', 'ohio', 'skibidi', 'cute', 'kitten', 'fortnite', 'big', 'h', 'discord', 'roblox', 'anime', 'juicy', 'hot', 'DJ', 'stupid', 'dead', 'cubic', 'hard', 'murdered', 'OG', 'sigma', 'beta', 'alpha', 'mario'];
var nouns = ['gamer', 'rizzler', 'stripper', 'edger', 'monke', 'doge', 'sigma', 'thug', 'mod', 'kitten', 'hacker', 'admin', 'dog', 'sweat', 'monster', 'chungus', 'h', 'cum', 'earnings', 'CASH', 'jayden', 'greg', 'gerg', 'ben', 'david', 'mike', 'liam', 'hassewawa', 'dirt', 'drake', 'mason', 'jizz'];
var numbers = ['69', '420', '1337', '6', '2', '8', '4', '11', '2012', '2001', '1', '2', '3', '4', '5', '7', '9', '10', '44', '23', '14', '98', '‏‏‎ ‎'];

function generateUsername() {
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    var number = numbers[Math.floor(Math.random() * numbers.length)];
    var username = adjective + noun + number;

    // Display the generated username
    document.getElementById('username').textContent = 'Your epic fortnite username: ' + username;
}
