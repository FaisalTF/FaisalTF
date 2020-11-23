window.addEventListener("load", init);

let moves = 0;
let prevMoves = [1,0,0,0,0,0];

function init() {
  toggleHelp();
  document.getElementById("optn1").addEventListener("click", function() {switchScreen(1);});
  document.getElementById("optn2").addEventListener("click", function() {switchScreen(2);});
  document.getElementById("helpButton").addEventListener("click", toggleHelp);
  document.getElementById("cite").addEventListener("click", toggleCitation);
  document.getElementById("help").addEventListener("click", toggleHelp);
  document.getElementById("bkBtn").addEventListener("click", back);
  generateSlide(0);
}

function toggleCitation() {
    document.getElementById("citeView").classList.toggle("hidden");
    document.getElementById("narContainer").classList.toggle("hidden");
    document.getElementById("btnsContainer").classList.toggle("hidden");
}

function back() {
  if(moves > 0) {
    if(document.getElementById("btnsContainer").classList.contains("hidden")) {
      document.getElementById("btnsContainer").classList.remove("hidden");
    }
    moves--;
    generateSlide(parseInt(prevMoves[moves]) - 1);
  }
}

function toggleHelp() {
  document.getElementById("helpView").classList.toggle("hidden");
  document.getElementById("narContainer").classList.toggle("hidden");
  document.getElementById("btnsContainer").classList.toggle("hidden");
}

function generateSlide(i) {
  let slide = slides[i];
  document.getElementById("narContainer").querySelector("p").textContent = slide["nar"];
  let imgUrl = "url('" + slide["bg"] + "')";
  document.getElementById("citedLink").textContent = slide["bg"];
  document.getElementById("bgContainer").style.backgroundImage = imgUrl;
  let newBrightness = 0.9 - (moves * 0.15);
  document.getElementById("bgContainer").style.filter = "blur(4px) brightness(" + newBrightness + ")";
  if(slide["optn1"]) {
    plugOption(document.getElementById("optn1").querySelector("p"), slide["optn1"]);
    plugOption(document.getElementById("optn2").querySelector("p"), slide["optn2"]);
  } else {
    document.getElementById("btnsContainer").classList.add("hidden");
  }
}

function plugOption(container, option) {
  container.id = parseInt(option.substring(0,2));
  container.textContent = option.substring(2);
}

function switchScreen(optionNum) {
  moves++;
  let newSlide = document.getElementById("optn" + optionNum).querySelector("p").id;
  prevMoves[moves] = newSlide;
  generateSlide(newSlide - 1);
}

  let slides = [
{ //1

"nar" : "Omar is a young male born in Aleppo, Syria who grew up as the second child of 4 siblings in a poor rural village in the north eastern provinces. His father solely supported the family through countless hardships, never being able to make enough to adequately support their needs as resources in their area were scarce and opportunities limited. Aside from joining the military or working in a poorly run factory Omar had little chance at bettering the situation of his family, with political instability in the area preventing foreign investors from setting up business there. Omar is left with the responsibility of providing for his family, while his sister encourages him to seek out education so that their family might gain more opportunities in the future.",

"bg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/City_of_Tadmor%2C_Syria.jpg/1920px-City_of_Tadmor%2C_Syria.jpg",

"optn1":"02Seek education",

"optn2":"09Help out family financially"

},

{ //2

"nar" : " After the death of his youngest sister, family is brought closer together, but still suffers financially. The war takes its toll on the community, and it begins fracturing. Even with the limited education that Omar achieved, he can see where this goes, but is hesitant to leave because he does not know what other areas hold ",

"bg" : "https://www.trbimg.com/img-5afc85bb/turbine/la-1526498740-ub9lr3urvc-snap-image/2000",

"optn1": "03Flee early",

"optn2": "06Stay behind to stock up on resources"

},

{//3

"nar" : "A big mistake. People are not unkind, but that doesn’t mean refugees are welcome anywhere, especially without any resources. Other communities are hit just as hard as Omar’s, and continued flight is not without risks.",

"bg" : "https://media.newyorker.com/photos/59097157ebe912338a3771e4/master/w_2560%2Cc_limit/151026_r27203_crop.jpg",

"optn1": "04Flee further from conflict",

"optn2": "05Try to gain some stability of the situation"

},

{//4
"nar" : "Family is split up as younger brother falls ill, Mother and the older sibling stays back to tend to the young one, Father and Omar leaves with promises to get medicine. However, father is unwillingly drafted into one of the factions, leaving Omar for himself. There is no possibility that he can get material aid by himself without illegal means, or societal help without joining a faction ",

"bg" : "http://tracks.unhcr.org/wp-content/uploads/2014/12/2014-12-WFP-food-aid-24034-tracks.jpg",

"optn1": "26Steal meds",

"optn2": "16Join a faction to support the rest of the family"

},

{//5

"nar" : " Omar’s family was already unwanted, but trying to scrounge up resources made the locals even more ire. The temporary dwelling was raided, his mother and sister raped. Older brother sought vengeance and was not heard from again. The local militia laughed him off when he sought for help and justice",

"bg" : "https://cdni.rt.com/files/2016.11/article/581f127fc46188aa7c8b45c8.jpg",

"optn1": "24Try to flee with the traumatized family",

"optn2": "25Bite the bullet and endure"

},

{ //6

"nar" : "Omar doesn’t know exactly how much supplies the family will need, but he knows that it is better to get more than less. However, the eagerness to accrue supplies catches the attention of some more desperate families. The times are tough, and we only have each other to rely on. But Omar’s hesitant to believe that the community could stay alive even with each other. ",

"bg" : "https://i.insider.com/52e8eb0e69bedda63b5b3f94?width=600&format=jpeg&auto=webp",

"optn1": "08Aid other members of the community",

"optn2": "07Hide away the resources"

},

{ //7

"nar" : "Many suspected that Omar was lying, but no one dared acted hastily, especially since the stockpile was hidden away. However, the underlying animosity eventually lead one of the fleeing community members to give hints to the militant factions of Omar’s relative affluence for their own benefit. The factions approached amicably the first time, but Omar fears this isn’t the last time his family will be visited. ",

"bg" : "https://www.lifegate.com/app/uploads/Bangladesh_Coxs-Bazar_clinica-per-screening-e-cura-della-malnutrizione.jpg",

"optn1": "24Run now",

"optn2": "16Strike a deal with the militant faction"

},

{ //8

"nar" : "Omar was too naïve to believe that the desperate could be trusted. The family stockpile was stolen from, and the community turns on each other. Force is necessary, although Omar despises it ",

"bg" : "https://api.time.com/wp-content/uploads/2015/04/palestinians-refugee-camp-lebanon.jpg?w=800&quality=85",

"optn1": "16Gain help of militant factions",

"optn2": "23Band together with allies of the community"

},

{//9

"nar" : "The tensions are rising. Omar’s family isn’t exactly affluent, but can manage themselves. Omar is able to keep a close eye on his siblings to notice that the younger brother is associating with some shady friends, but fortunately, the youngest sister is able to rein him in. The living gets tougher. Omar’s family believes the situation will pass with time, but the pressure of militant factions is scaring the family.",

"bg" : "https://www.dailystar.com.lb/dailystar/Pictures/2013/02/06/142752_img650x420_img650x420_crop.jpg",

"optn1": "13Reluctantly aid the militant factions",

"optn2": "10Ignore their presence"

},

{//10

"nar" : "Militant factions posed threateningly until pressure hit them from the side. After all, supplies are only good when you’re alive to fight. Without a doubt, they will return after the fiercest of battles is over, but some time was bought.",

"bg" : "https://www.featureshoot.com/wp-content/uploads/2017/01/9-1.jpg",

"optn1": "11Flee from conflict",

"optn2": "12Band together with the rest of the community into a fighting bloc"

},

{//11

"nar" : "The knowledge Omar gained from helping out the family finances helped him locate where the supplies are. And where there are supplies, there is always a town. Unfortunately for Omar, he didn’t realize that the paths that lead to supplies are often one that leads straight into military forces.",

"bg" : "https://ca-times.brightspotcdn.com/dims4/default/8a1af62/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F60%2F29%2Fad0da31621669a28e7d42e2063d6%2Fla-1504139870-mahdfunkuj-snap-image",

"optn1": "22Relinquish their supplies and try to move further down the safe path",

"optn2": "16Join the faction"

},

{//12

"nar" : "As a bigger group, Omar’s town was able to repel the pressure, but even a small group has its power struggles. Omar may be more affluent with better control over the supplies to the town, but the brute force is not his strength. Fortunately, his younger sister is old enough to marry.",

"bg" : "https://ca-times.brightspotcdn.com/dims4/default/49fe2d1/2147483647/strip/true/crop/512x341+0+0/resize/840x559!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc4%2F18%2F562782d01181fc7cf1842b9a00f2%2Fsdut-file-in-this-sunday-march-11-20160903-003",

"optn1": "21Respect his sister's wishes and risk the fallout of the temporary alliance",

"optn2": "20Marry his younger sister to solidify power under his household"

},
{//13

"nar": "The pressure has let up… for a while. Fortunately, the group did not press further onto the hospitality of the community, but the enemy forces took notice and have devastated the community economy. All supplies are cut off and the warfare draws closer. Hiding has helped, but not for long. The family eventually needs more food.",

"bg": "https://media.mehrnews.com/d/2017/05/06/3/2450892.jpg",

"optn1":"14Stay safe and hope for the best",

"optn2":"15Sneak out to other communities for supplies"

},

{//14

"nar": "The best did not occur. The family is on the brink of starving and all nearby resources have been scavenged by the remaining community members. Offered a suggestion: escape as a group",

"bg": "http://america.aljazeera.com/content/ajam/articles/2013/10/23/inside-the-homesofsyrianrefugeefamilies/_jcr_content/mainpar/imageslideshow/slideShowImages/slide3/image.adapt.960.high.jordan_refugee_families_03a.jpg",

"optn1":"18Follow the community group in their fight",

"optn2":"19Escape independently"

},

{//15

"nar" : " In one of the supply runs, mother is killed in an unfortunate drone strike. Father joins ISIS and the community resembles ruins more and more with each passing day",

"bg": "https://globalaid.net/uploads/16damascus-3-articleLarge.jpg",

"optn1":"17Try to hold together the remnants of his family",

"optn2":"16Join ISIS with father"

},

{//16

"nar": "Trapped, hopeless, and hungry, Omar sees no other option than to join ISIS. He has never been eager to fight, especially not in the name of religion or politics which he doesn't care much about, and he has no desire to hurt anyone. Yet, he knows that as a member of ISIS his family will be among the first to get supplies when they come into the city. He will be respected, or feared, by members of his community. If he asks for something, he will get it. And while he may not be safe, his family will. He is old enough now, isn’t it his duty to take care of them? Omar is almost relieved when he receives his first task: bomb a road regularly used by opposition forces. This type of attack doesn’t involve any direct contact and it will only harm a few people at the most… maybe, with enough prayer, he will be forgiven?",

"bg" : "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492187015/articles/2015/01/14/exclusive-isis-gaining-ground-in-syria-despite-u-s-strikes/150113-mak-syria-map-tease_ubgfmk",

},

{//17

"nar" : "It has been a long day for Omar. He drinks what little water he has left. Toughest of the battles had passed weeks ago: out somewhere else, probably seeking more to consume in its destructive path. It has gotten easier to get out and about, not that there’s much point; his siblings had died. The older brother went out to gather what food he could, but never returned back to the hideout. The younger ones died of some illness. Some said it was from the tainted water, the others said from the corpses and rats. Father returned a few days back with nothing but broken promises and an infected foot. His father never explained what happened, and Omar never asked. Omar knew his father’s time wasn’t long. He had neither the means nor the will to bear this agony. He will watch his father pass, but no more. He didn’t care anymore. When he handed off the remaining supplies to the neighbors, they told him to not give up: that life goes on. Omar knows that it does. But not for his mother. Not for his little sister. And not for himself",

"bg" : "https://www.thelocal.ch/userdata/images/article/5750dedba9f5bfc3f3091395f66d4407cfa6e9376b85600b4745c3240e97c2f6.jpg",


},

{//18

"nar" : "They made it. They had somehow avoided serious trouble and reached a relatively safer town. But things didn’t get better. Just as feared, no one wanted a group of people with nothing to offer and everything to want. Well, nothing to offer until some bunch decided that Omar’s little sister could be wed into one of the member of the town in exchange for supplies. Omar was against it, mother was against it, but times were tough and rules were tougher. So Omar had to get tougher as well. It was the first time Omar hurt anyone: he had been a kindred spirit, after all. But it was not the last time he did. Where the locals saw cold-blooded murder, others saw opportunity. Omar was determined and willing to act, at least for now. The rest of the group formed around Omar, big enough to overpower the locals and take what is rightfully theirs. But once again, the supplies grow thin, and Omar knows that the pack will have to hunt again soon.",

"bg" : "https://www.almasdarnews.com/wp-content/uploads/2017/12/RaqqaDestruction.jpg",

},

{//19
"nar": "After all he had witnessed, Omar decides that he will risk escape at any cost. It will be a dangerous journey, and one that must be done alone. Lebanon and Jordan are the closest neighboring countries, but as a Palestinian-Syrian, Omar knows that he will only have a chance at gaining residency in Turkey. Once he has settled in Turkey, found work, and saved a little money then, he tells himself, he will come back to rescue his siblings. Late at night, he leaves his home to meet his smuggler at an abandoned factory, bringing with him the entirety of his family’s savings for the fee. Omar and six other people crowd into the back of the smuggler’s truck for the four-day-long journey. The trip is exhausting and difficult, but all goes according to plan--until they arrive at a military checkpoint near the border. The guards interrograte the smuggler, who insists that he is transporting produce to a market but a baby in the truck begins to cry, exposing his lie. A guard slams open the truck’s door, revealing the passengers inside. He asks them if they are trying to escape to Turkey. Omar’s heart is pounding in his chest, his hands start to shake, and he feels sweat forming at his brow. This is it, they’ve been caught. “All of you, out of the truck now!” the guard yells “You’re going to jail”.",

"bg": "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/12/22/dc3be361867f4f9da8d4db41e81af2a5_18.jpg",


},

{//20

"nar": "Power. Omar has some great semblance of it in his community. He controls who lives, or who dies. Who gets food, who doesn’t. Who they raid, and who they spare. He isn’t a particularly menacing leader, but in wartime, prices are paid, sometimes in gold, sometimes in iron. Despite the previous history, Omar recently had to make an alliance with ISIS in order to secure extra supplies and freedom of movement. In exchange, Omar’s group will supply ISIS with crucial tactical information, as well as some share of the loot whenever Omar raids a village. Once, he had to donate a child to act as a decoy for ISIS trap. It didn’t work, but it got them precious weapons and ammo, so Omar was satisfied. The demands ISIS makes upon his group grows bigger and bigger, but Omar must follow them: he knows that many vie for his position, and he can’t allow that to happen. Perhaps there will come a time where the sacrifice will be too great for him to make. But Omar fears that by that time, it won’t seem too great of a sacrifice.",

"bg": "https://cdn.prod.www.spiegel.de/images/46578127-0001-0004-0000-000001114786_w1528_r1.5_fpx55.32_fpy44.99.jpg",


},

{//21

"nar": "Where had it gone wrong? We had a fighting chance holding our community together, but now all will pay the greed of others. How could they not see that we were still in deep? How could they not realize that we were still under watch? The signs of infighting was brewing, and Omar tried all he could to deescalate the situation. He bribed with what little he had left, he begged them to reconsider, and he even abdicated his position so the other group would retain full power. But his younger brother saw this short power vacuum as his opportunity, and seized that little, meaningless thing. He was an expert at rousing the people’s heart, but a foolish, short-sighted leader. Once the infighting broke out in full, ISIS sweeped in and devastated our group. Omar stands, his body to the walls, lined up with the rest of his townsfolk. Behind him, he hears the guns being raised up. Omar’s brother is next to him, praying to the gods. Omar opens his mouth too, but finds no words of prayer. Inside him is only resentment, for his brother, for his townsfolk, and for himself.",

"bg": "https://nedaa-sy.com/storage/news_images/10692/E4y1rCt7V7qwef8LnB5Vply6PCkIVJMXk4g31dlB.jpeg?w=720&h=405",


},

{//22

"nar": "What’s worse, death by starvation or violence? The latter would be quick, but guaranteed. The former would be longer and perhaps more painful, but the safety that could be bought by relinquishing their supplies would give them hope, a second chance to find food. Omar chooses this option, and donates his family’s remaining supply of food and water to the military group occupying the area. One of the group’s leaders is pleased by what he views as an act of Omar’s loyalty and allows him to keep some of it, enough to feed his family for one more week. During this time Omar searches for more supplies, but his efforts are to avail. By the end of the week, his brother and sister are once again hungry and their options are exhausted. He begins to reconsider joining ISIS. Maybe he would be killed fighting, but for a while, at least, he could provide for his family.",

"bg": "https://g4k5b9h2.stackpathcdn.com/wp-content/uploads/2013/11/syriahungry.jpg",


},

{//23

"nar"
: "The tense situation began to resolve into two main factions; one siding with Omar, the other with the group that stole Omar’s stockpile. Justice was on his side, and Omar was confident that his family will be repaid for their kindness. Things were optimistic at first, but as time dragged on, more and more fell away from Omar’s cause and joined the other group. After all, food and supplies rules supreme in desperate times. Eventually, Omar only had himself and his family to fend for themselves, and were driven out. With military everywhere and no supplies, Omar fears the worst.",

"bg" : "https://theglobepost.com/wp-content/uploads/2018/12/Syrian-refugees-1140x570.jpg",


},

{//24

"nar": "Omar and his family need to leave—now. They don’t have enough money in savings to pay smuggler’s fees for the whole family, which would be around $5000, so they must attempt the journey on their own. They decide to flee south to Jordan because it is the shortest and safest route, leaving late at night and taking only what they can carry. It is an extremely hot day and the trip is arduous. They drink through their supply of water faster than they’d anticipated and run out by the middle of the day when they need it most. After an exhausting day of hiking through the desert, the family finally arrives at a refugee camp just across the border. They are tired, hungry, and dehydrated, and hope to find the supplies they need at the camp. However, resources are low and their new neighbors are reluctant to share what little they have. Without access to drinking water and food, survival may be harder in the safety of the refugee camp than in the battleground of their home city.",

"bg": "http://paysdegex-refuge.fr/wp-content/uploads/2015/09/557035ce31219Syrian_refugees_desert.jpg?w=84&h=47&crop=1",


},

{//25

"nar": "Being alive is what’s important. Omar’s family lives yet another day. They had to give up their dignity, suffer through humiliation, but they are still alive. Omar trudges back to the shelter, bruised, battered, and utterly exhausted. He has had to prove himself just to afford a place for his family to live in. Work was hard, but watching out for himself was harder. A broken nail, a trip, a fall… anything could put him and his family on the brink. That’s why Omar was worried when he began coughing. He knew that renovating old buildings was a dangerous task, and there was no way he could afford safety gears. He was able to hide it for so long, but he fears that this isn’t a common cold. He fears that he won’t be able to hide his illness, that he won’t be able to work. That he had doomed his family with his choices. But for now, he rests his eyes to work tomorrow, so that he and his family may live, one day more.",

"bg": "https://mronline.org/wp-content/uploads/2020/01/Syria-5_featured-600x400.jpg",


},

{//26

"nar" : "Omar had education, yes, but he didn’t have the street smarts. When he got caught trying to steal medicine, the townsfolk reported him to the militia, who decided they had a better use for two able hands and feet. It had been 2 weeks working as a messenger, carrying marked packages from one end to another. At least there was solace in the fact that he heard news of his father and his family on his trips to and from. The last package he delivered was peculiar, and the recipient even more so. The look on his face was a mixture: grim determination, some hidden fear, anger, sadness, and so much more. When Omar handed the package off, he knew what was going to happen. He knew that many would die, with no regards to innocence or guilt. But the deaths won’t be on his hands… that’s what he told himself.",

"bg": "https://cdn.theatlantic.com/thumbor/VSVQQevPuX3l444XvzLqFwJToEY=/0x203:3888x2390/1440x810/media/img/mt/2017/02/AP_134684065776/original.jpg",

}
];
