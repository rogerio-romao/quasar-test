(self["webpackChunkquasar_test"]=self["webpackChunkquasar_test"]||[]).push([[469],{4469:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E});var a=o(3673),n=o(2323);const s=e=>((0,a.dD)("data-v-20409e05"),e=e(),(0,a.Cn)(),e),i=s((()=>(0,a._)("h4",{class:"q-pl-md text-h4 text-weight-light text-uppercase text-blue-grey"}," Blog ",-1))),r=s((()=>(0,a._)("p",{class:"q-pl-md text-subtitle1 q-mb-lg text-blue-grey"}," New addition to the site, decided to start blogging here and then when I learn something interesting. ",-1))),l={class:"pills q-pl-md text-blue-grey q-mb-md"},h=(0,a.Uk)(" Filter: "),d={class:"text-h4"},u={class:"text-subtitle1 text-weight-bold float-right"},c=["innerHTML"],g={class:"pills"};function p(e,t,o,s,p,m){const y=(0,a.up)("q-badge"),b=(0,a.up)("q-separator"),w=(0,a.up)("q-card-section"),f=(0,a.up)("q-chip"),v=(0,a.up)("q-card"),k=(0,a.up)("q-expansion-item"),I=(0,a.up)("q-list"),q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(q,{padding:""},{default:(0,a.w5)((()=>[i,r,(0,a._)("div",l,[h,(0,a.Wm)(y,{label:"all",outline:"",rounded:"",color:"red","text-color":"dark",class:"q-mr-sm q-px-md q-py-xs tags shadow-1 text-weight-bold",onClick:t[0]||(t[0]=e=>s.tagFilter="all")}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.allTags,((e,t)=>((0,a.wg)(),(0,a.j4)(y,{key:e,label:e,outline:"",rounded:"",color:s.pillColors[t],"text-color":"dark",class:"q-mr-sm q-px-sm q-py-xs tags shadow-1 text-weight-bold",onClick:t=>s.tagFilter=e},null,8,["label","color","onClick"])))),128))]),(0,a.Wm)(b),(0,a.Wm)(I,{bordered:"",class:"q-mt-xl bg-dark q-px-sm"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.filteredPosts,((e,t)=>((0,a.wg)(),(0,a.j4)(k,{group:"somegroup",icon:"description",label:e.attributes.title,"default-opened":0===t,"header-class":"text-primary",class:"bg-light-blue-2 q-my-sm",key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{dark:"",class:"my-card q-pa-lg q-mb-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("span",d,(0,n.zw)(e.attributes.title),1),(0,a._)("span",u,(0,n.zw)(e.attributes.date),1)])),_:2},1024),(0,a.Wm)(b,{dark:"",inset:""}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",{class:"post-content",innerHTML:e.html},null,8,c)])),_:2},1024),(0,a.Wm)(b,{dark:"",inset:""}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.attributes.tags,(e=>((0,a.wg)(),(0,a.j4)(f,{key:e,outline:"",color:"lime","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","default-opened"])))),128))])),_:1})])),_:1})}o(7098),o(71);var m=o(794),y=o(1959),b=o(4741),w=o.n(b),f=o(1932),v=o.n(f),k=o(2703),I=o.n(k),q=o(3861),x=o.n(q);const C={setup(){const e=(0,m.Z)({title:"Blog",titleTemplate:e=>`${e} - Rogerio's Portfolio`}),t=[w(),v(),I(),x()].sort(((e,t)=>new Date(e.attributes.date)<new Date(t.attributes.date)?1:-1)),o=(0,y.iH)("all"),a=(0,y.Fl)((()=>"all"===o.value?t:t.filter((e=>e.attributes.tags.some((e=>e.includes(o.value))))))),n=(0,y.Fl)((()=>[...new Set(t.reduce(((e,t)=>e.concat(t.attributes.tags)),[]))])),s=["pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"];return{metadata:e,posts:t,tagFilter:o,filteredPosts:a,allTags:n,pillColors:s}}};var S=o(4379),T=o(9721),G=o(5869),_=o(7011),W=o(9399),j=o(151),A=o(5589),P=o(7030),M=o(7518),F=o.n(M);C.render=p,C.__scopeId="data-v-20409e05";const E=C;F()(C,"components",{QPage:S.Z,QBadge:T.Z,QSeparator:G.Z,QList:_.Z,QExpansionItem:W.Z,QCard:j.Z,QCardSection:A.Z,QChip:P.Z})},2703:e=>{e.exports={attributes:{title:"The art of Googling",date:"30 Jan 2022",tags:["programming","musings"]},html:"<h3>It is an art</h3>\n<p>When you start programming, it is hard. There is too much to know. Lots of things that can go wrong. A semicolon can ruin your life.<br>\nSo you start Googling around left and right... and you find out that Googling around is also hard. It's hard for several reasons.</p>\n<p>It's hard because there is a ton of information out there, much of it inconsistent.<br>\nIt's hard because in the beginning you don't know a reputable source from a bad one.<br>\nIt's hard because you probably don't really know what is actually wrong with your code. This is probably the biggest hurdle: formulating what your search term is! If you have no idea, it could be any number of things, so you Google like a blind hunter trying to hit a flying duck.</p>\n<h5>With time comes wisdom</h5>\n<p>What experience and persistence gives you, is an intuition for what is the search term you need to find the answer to your problem. So lately what I found is that more often than not, <strong>what I call the <em>&quot;magic search&quot;</em> consists of a 3 word term</strong>.<br>\nSeems like the more verbose your search is, more unrelated and low quality results will show, whereas when your intuition is more developed, a combination of 3 or so terms will pop into your mind that will deliver ultra specific results.\nI don't think this can be tought, you just have to develop it.</p>\n"}},1932:e=>{e.exports={attributes:{title:"Gsap is awesome",date:"28 Jan 2022",tags:["animation","libraries"]},html:'<h3>It really is</h3>\n<p>I had this idea of creating an animation as the landing page for the website.</p>\n<p>And I\'d always been curious about Gsap as it seemed not only extremely powerful but also sort of the standard for web animation libraries.</p>\n<p>But it also seemed &quot;too&quot; powerful and a bit daunting, and the need had never arose to use it, with my animation needs being covered just by CSS animations.</p>\n<p>So, for this project, I decided to dig into it. And I was very pleasantly surprised. While it is true that the library has a ton of features, the excellence of the documentation and the extreme ellegance of it\'s API makes it a total joy to use.</p>\n<h5>Documentation</h5>\n<p>This library\'s documentation should be the gold standard. So many times the docs for a library are so sparse or slightly criptic, that unless you have spent already a long time with it, there is going to be a ton of trial and error, even with the documentation open.</p>\n<p>Gsap are having none of that, and everything is explained in very clear language, with code examples that all make sense, and as a final bonus, there are plenty of (extremely well done) videos! If we could have this level of documentation around frequently, lots of headaches would be avoided. Major kudos to Gsap.</p>\n<p>Also, their website showcases what they are about, with lots of small details and animations. <a href="https://greensock.com/docs/">Have a look at their docs here</a>. There is also a nice <a href="https://www.creativecodingclub.com/bundles/creative-coding-club">free course over at Creative Coding</a>.</p>\n<h5>API</h5>\n<p>The quality of the API also really struck me. Things that are very complex to do with CSS are a basic one liner.\nYou can have easy sequences of animations that fire one after the other, or that have a delay between each other. Sequences that reverse and loop. A library of useful and quirky easings. The list goes on.</p>\n<p>The library can tween between properties set as &quot;blue&quot; and &quot;red&quot;, just like that, in text, and know what to do with it! It can tween normal number variables. It is smart to deal with any units involved, such as px or %, without you having to worry about it. It will just do the right thing.</p>\n<p>Most of the methods are contructed in a multi-signature way: depending how many arguments you pass it, it either is a setter or a getter, or behaves in a different way. All of it very clear to understand through the already mentioned stellar documentation.</p>\n<pre><code class="language-javascript">gsap.from(obj, { duration: 1.5, opacity: 0, delay: 2 });\n</code></pre>\n<p>An example of a one liner that will grab a reference, and animate its opacity for 1.5s after a 2s delay, with a default easing.</p>\n<h5>In conclusion</h5>\n<p>After a couple days studying the documentation and playing around with it, I felt very confortable creating the timelined animation that you see on this website landing page. I thouroughly recommend this library to anyone who needs to do some more complex animations!</p>\n'}},3861:e=>{e.exports={attributes:{title:"Where to learn",date:"05 Feb 2022",tags:["programming","resources"]},html:'<h3>My favorite spots to learn</h3>\n<p>This will be an informal list and review of the websites / courses I have enjoyed since coming back to coding, in hopes it can be of use to any others out there in the same situation.</p>\n<p>There are 2 basic categories, free resources and paid course websites.</p>\n<h5>Free Resources</h5>\n<p>In no specific order, here are some of my favorites.</p>\n<p><strong>FreeCodeCamp</strong> -\nThis website features a large amount of guides and courses, from basic HTML to React, Python and many others. They have a built in code editor (not the best one to be honest) where you can do the exercises. And you can optionally donate to the website and get course completion certificates.\n<a href="https://www.freecodecamp.org/learn/">Go to FreeCodeCamp</a></p>\n<p><strong>MDN</strong> -\nThis Mozilla documentation site is like the bible of web development, and something to be consulted almost daily when working. It\'s got guides and most of all reference documentation on every Javascript method, HTML element, CSS rule etc.\n<a href="https://developer.mozilla.org/">Go to MDN</a></p>\n<p>Other alternatives to these two are W3Schools and GeeksForGeeks, but I don\'t find them as good.\nThe rest in this category are more of the code challenges / competitive coding category, which are fun but also very instructive and they make you think a lot about problem solving.</p>\n<p><strong>Codewars</strong> -\nPretty cool interface, you can choose from easy problems (called katas on this website), to very hard ones, and you can try to solve them in a wide variety of languages. <a href="https://www.codewars.com/">Go to Codewars</a></p>\n<p><strong>Edabit</strong> -\nVery similar to the above, maybe with more beginner friendly challenges. <a href="https://edabit.com/challenges">Go to Edabit</a></p>\n<p><strong>Exercism</strong> -\nAlong with the cool name, Exercism has recently had a cool redesign. It used to be a command line tool. You would download the exercises, do them on your own editor, then submit them via CLI. Now you can still do that or you can do them in their integrated editor. The site looks fantastic, there are tons of languages to choose, and it\'s all test based. So you get all the tests and the prompt, then it\'s up to you to make them pass. <a href="https://exercism.org/">Go to Exercism</a></p>\n<p>Honorable mentions go to Codesignal, with Arcade, Challenge and Interview Practice modes, but it seems to not have been updated in a long time; CSS Battle, fun and different - they give you an image that you have to replicate using CSS; Frontend Mentor is a recent discovery, they give you a design for a UI and you have to build it with just the images and design spec; and finally Advent of Code, some mostly hard algorhytmic challenges.</p>\n<h5>Paid Websites</h5>\n<p>In this category are mostly course sites, many of them pretty well know I would guess, but regardless, here are my favorites. Even if you do not want to spend any money, they are worth checking out, as most will have at least some free content mixed in as well.</p>\n<p><strong>Egghead</strong> -\nEgghead has got a quality website and some quality courses. It is a bit pricey ($250 a year at the time of writing). I think their strong point is React courses, although you can find courses on nearly the whole tech stack. <a href="https://egghead.io/">Go to Egghead</a></p>\n<p><strong>Pluralsight</strong> -\nAnother one that is pricey - Premium account £370 a year! But the quality is amazing with some unique and exclusive courses and nice features like choosing a carrer track that gives you a recommended course path, or quizzes about a certain subject that give you weak points to work on. <a href="https://www.pluralsight.com/">Go to Pluralsight</a></p>\n<p><strong>Scrimba</strong> -\nScrimba does have a big selection of free courses mixed in with their paid ones. They are quite unique in that their code editor and video player are integrated, so while watching a video that is showing the code, you can pause the video and interact with the code! It\'s really quite neat. <a href="https://scrimba.com/">Go to Scrimba</a></p>\n<p><strong>Vue Mastery &amp; Vue School</strong> -\nI am a big fan of Vue and these two websites are the best resources on the web for it, in terms of video courses. Both are equally good in my opinion, obviously there will be some overlap in content, but the styles are pretty different. <a href="https://www.vuemastery.com/courses/">Go to Vue Mastery</a> or <a href="https://vueschool.io/courses">Go to Vue School</a></p>\n<p>I also bought a yearly subscription to Skillshare for the past 2 years, but I no longer will. It\'s programming content isn\'t that great, lots of super-beginner type stuff, their interface is starting to feel a bit stale and dated, it seems like they are betting more on lifestyle type courses.</p>\n'}},4741:e=>{e.exports={attributes:{title:"Welcome to the Blog",date:"27 Jan 2022",tags:["musings"]},html:"<h3>Welcome</h3>\n<p>I have decided it is time for me to finally start a blog.</p>\n<p>It is still early days and I am still refining the layout and technicalities of it.</p>\n<p>It is a bit unconventional for now with this accordion type layout, but we will see how it goes.</p>\n<p>I hope to do some posts about new technologies or lessons learned while coding, and possibly non-programming subjects too, don't know yet, but I have 3 posts roughly outlined in my head.</p>\n"}}}]);