beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong && 
             player.isPlaying;
    },

    toBeAGoodInvestment: function() {
      return {
        compare: function (actual, expected) {
          var result = {};
        console.log(actual, expected, '-->');
          result.pass = actual.isGood();
          return result;
        }
      }
    }
  });
});
