function learnJS(lang, callback) {
    console.log("I learn " + lang);
    callback();
}

learnJS ("JavaScript", function() {
    console.log("I learnt 3d lesson!");
});

