# NightbotSpeedrunCommands
Some nightbot commands for integrating speedrun.com into twitch for twitch.tv/zoochable

Commands:

!pb - displays all the speedrun.com submitted personal bests for user Zoochable in game Portal

!wr [category] - displays the world record in Portal for a given category: need to input exactly as the category name appears in speedrun.com urls not case sensative (e.x. glitchless, inbounds_no_sla, inbounds, out_of_bounds, etc.)


To use with your stream:
1. Add nightbot to your stream (google how to do it I'm to lazy to tell you right here)
2. Setup commands !pbhelper, !wr, !wrhelper with the messages as the respective javascript code (You might need to shrink !pbhelper by deleting all the newlines and indentation)
3. Alias !wr to call !wrhelper (literally type !wrhelper in the alias box)
4. Create a command !pb with the message `https://speedrun.com/api/v1/users/YOUR-USERNAME-HERE/personal-bests https://speedrun.com/api/v1/games/YOUR-GAME-HERE/categories` aliased to !pbhelper
5. replace the username and game in those urls
6. Change any appearance of 'portal' in any urls to whatever game that you run
7. Change "4pd0n31e" to be the id of the game that you run

It should theoretically work

