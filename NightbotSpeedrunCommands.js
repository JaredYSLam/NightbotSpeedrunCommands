// -------------------------------------------------------------
// !pbhelper
// 4pd0n31e is the speedrun.com id for Portal 1
// called from !pb which returns https://speedrun.com/api/v1/users/Zoochable/personal-bests?embed=game,category
$(eval 
var a=$(urlfetch json $(1));
var out="My PBs: ";
for(var pb in a['data']){
    var r=a['data'][pb];
    if(r.run.game === "4pd0n31e" && r.category.data.type === "per-game"){
        var t=r.run.times.primary_t;
        var m=Math.floor(t/60);
        var sc=Math.round((t-60*m)*100)/100+"";
        var sm=sc.split('.');
        var pd=`${sm[0].padStart(2,'0')}.${sm[1].padEnd(2,'0')}`;
        out+=r.category.data.name+`: ${m}:${pd} `;
    }
}
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
var secsmilis = seconds.split('.');
var padded = `${secsmilis[0].padStart(2,'0')}.${secsmilis[1].padEnd(2,'0')}`;
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

