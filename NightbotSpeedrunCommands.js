// -------------------------------------------------------------
// !pb
// 4pd0n31e is the speedrun.com id for Portal 1

$(eval 
var api=$(urlfetch json https://speedrun.com/api/v1/users/Zoochable/personal-bests);
var cs=$(urlfetch json https://speedrun.com/api/v1/games/Portal/categories);
var cIs={};
for (var c in cs['data']) {
    var d = cs['data'][c];
    cIs[d['id']]=d['name'];
};
var out= "My PBs: ";
for (var pb in api['data']) {
    var r=api['data'][pb]['run'];
    if (r['game'] === "4pd0n31e") {
        var t=r['times']['primary_t'];
        out+=cIs[r['category']]+": "+Math.floor(t/60)+":"+((t*100)%6000)/100+" ";
    }
};
out
)

// --------------------------------------------------------------
// !wrhelper
// helper for !wr

$(eval 
var wrtime = parseFloat($(3));
var player=$(urlfetch json $(1)); 
var playername = player['data']['names']['international'];
var minutes = Math.floor(wrtime/60);
var seconds = Math.round((wrtime - 60 * minutes) * 100) / 100 + "";
var padded = seconds.padStart(5, '0');
`$(2) World Record is ${minutes}:${padded} by ${playername}`
)

// ----------------------------------------------------------------
//!wr
// set alias to !wrhelper
$(eval 
var wr=$(urlfetch json https://speedrun.com/api/v1/leaderboards/portal/category/$(query)?top=1);
var wrrun = wr['data']['runs'][0]['run'];
var wrplayerid=wrrun['players'][0]['id'];
var wrtime = wrrun['times']['primary_t'];
`https://speedrun.com/api/v1/users/${wrplayerid} $(query) ${wrtime}`
)

