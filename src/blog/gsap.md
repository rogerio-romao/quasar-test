---
title: Gsap is awesome
date: 28 Jan 2022
tags:
  - animation
  - libraries
---

### It really is

I had this idea of creating an animation as the landing page for the website.

And I'd always been curious about Gsap as it seemed not only extremely powerful but also sort of the standard for web animation libraries.

But it also seemed "too" powerful and a bit daunting, and the need had never arose to use it, with my animation needs being covered just by CSS animations.

So, for this project, I decided to dig into it. And I was very pleasantly surprised. While it is true that the library has a ton of features, the excellence of the documentation and the extreme ellegance of it's API makes it a total joy to use.

##### Documentation

This library's documentation should be the gold standard. So many times the docs for a library are so sparse or slightly criptic, that unless you have spent already a long time with it, there is going to be a ton of trial and error, even with the documentation open.

Gsap are having none of that, and everything is explained in very clear language, with code examples that all make sense, and as a final bonus, there are plenty of (extremely well done) videos! If we could have this level of documentation around frequently, lots of headaches would be avoided. Major kudos to Gsap.

Also, their website showcases what they are about, with lots of small details and animations. [Have a look at their docs here](https://greensock.com/docs/)

##### API

The quality of the API also really struck me. Things that are very complex to do with CSS are a basic one liner.
You can have easy sequences of animations that fire one after the other, or that have a delay between each other. Sequences that reverse and loop. A library of useful and quirky easings. The list goes on.

The library can tween between properties set as "blue" and "red", just like that, in text, and know what to do with it! It can tween normal number variables. It is smart to deal with any units involved, such as px or %, without you having to worry about it. It will just do the right thing.

Most of the methods are contructed in a multi-signature way: depending how many arguments you pass it, it either is a setter or a getter, or behaves in a different way. All of it very clear to understand through the already mentioned stellar documentation.

```javascript
gsap.from(obj, { duration: 1.5, opacity: 0, delay: 2 });
```

An example of a one liner that will grab a reference, and animate its opacity for 1.5s after a 2s delay, with a default easing.

##### In conclusion

After a couple days studying the documentation and playing around with it, I felt very confortable creating the timelined animation that you see on this website landing page. I thouroughly recommend this library to anyone who needs to do some more complex animations!
