# NightbotSpeedrunCommands
Some nightbot commands for integrating speedrun.com into twitch for twitch.tv/zoochable

Commands:
!pb - displays all the speedrun.com submitted personal bests for user Zoochable in game Portal
!wr [category] - displays the world record in Portal for a given category: 
                 need to input exactly as the category name appears in speedrun.com urls not case sensative (e.x. glitchless, inbounds_no_sla, inbounds, out_of_bounds, etc.)


To use with your stream:
1. Add nightbot to your stream (google how to do it I'm to lazy to tell you right here)
2. Setup commands !pb, !wr, !wrhelper with the messages as the respective javascript code
3. Alias !wr to call !wrhelper (literally type !wrhelper in the alias box)
4. Change Zoochable in !pb in the cs url to whatever your username is
5. Change any appearance of 'portal' in any urls to whatever game that you run
6. Change "4pd0n31e" to be the id of the game that you run

It should theoretically work

