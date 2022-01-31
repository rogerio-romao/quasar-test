---
title: Where to learn
date: 02 Feb 2022
tags:
  - programming
  - resources
---

### My favorite spots to learn

This will be an informal list and review of the websites / courses I have enjoyed since coming back to coding, in hopes it can be of use to any others out there in the same situation.

There are 2 basic categories, free resources and paid course websites.

##### Free Resources

This library's documentation should be the gold standard. So many times the docs for a library are so sparse or slightly criptic, that unless you have spent already a long time with it, there is going to be a ton of trial and error, even with the documentation open.

Gsap are having none of that, and everything is explained in very clear language, with code examples that all make sense, and as a final bonus, there are plenty of (extremely well done) videos! If we could have this level of documentation around frequently, lots of headaches would be avoided. Major kudos to Gsap.

Also, their website showcases what they are about, with lots of small details and animations. [Have a look at their docs here](https://greensock.com/docs/). There is also a nice [free course over at Creative Coding](https://www.creativecodingclub.com/bundles/creative-coding-club).

##### Paid Websites

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
