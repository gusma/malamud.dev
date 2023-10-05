---
title: 'Some setup notes on Andrea Fomeras Learn Hotwire Course'
description: "Short notes on how to avoid certain pitfalls"
pubDate: 'Apr 9 2022'
heroImage: '/learn-hotwire.png'
---

<!-- ![Learn Hotwire by Andrea Fomera](learn-hotwire.png) -->

> First and foremost let me clear this post wasn't in any way created to badmouth the authoress of this course or the content she creates. On the contrary, I'm currently taking this course and loving it, and thought I would save everyone ten minutes of setup if they were to fall on the same errors as me. 

As some sort of second disclaimer: I'm a newbie Rails developer, and for all purposes I'm a newbie developer overall. I find myself amazed and at the same time frustrated at the things I discover and at no instant think about myself as any kind of good or superb developer. I'm the tail, struggling end of developers, at least for now. I'm just trying to learn how to solve things. I'm your noob, at only thirty eight-years all.
This being said, if this, what I write, sounds stupid to you, or causes you to say "duh, I knew that", sorry, I didn't. You can skip this post if that is so.

[Andrea Fomera](https://afomera.dev)'s course on [Learning Hotwire](https://store.afomera.dev/learn-hotwire) looks badass and I'm currently taking it. Loving it. Haven't finished it, yet, though, but woulnd't doubt on recommending it. Nevertheless, instead of tweeting about this where all the little bits of wasted-time wisdom may have been lost, I preferred to take the hard way and comment on some of the pitfalls of the first part setup of the Learn Hotwire course. I underwent some of them.

> Let me please clarify. I'm currently working with a Macbook Pro M1 14". 
> The computer's quite anew and M1 has quite a bit of issues and scores still to settle architecture wise. Nevertheless, even if we have installed Rosetta for our terminal, we're using it as-is. You can pull the change but the idea is not to depend, over the future, with having to 'roll-back' your Terminal to work with architectures that the computer will not use forever.
> Let us try to use the new architecture and begin working with it.

As this is written in 2022, and the course may have been written a few months ago (perhaps a year?) a few of its dependencies may cause issues. Especially with how quirky M1's are for everything.
For an example, [when applying the template to install from Railsbytes](https://railsbytes.com/public/templates/xkjs12). Doing so, with Ruby v3.0.0, having installed Rails v7 and NodeJS v17 (through NVM), you may run across a few issues. The first, may be:

```sh
rails aborted!
Thor::Error: The file /Users/gustavomalamud/repos/rails-forum-demo/config/webpack/environment.js 
does not appear to exist
```

The first error generated was, that as this is a right-out-of-the-box computer, so remember to install Yarn if you haven't. It won't express itself deliberately, but you will detect the difference at the extent (or length) of the installation process the Template script gets to. Our main issue here is a frontend issue, specifically with dependencies and how the computer we're using is taking them.

At the tail end of the installation of the template. I don't quite know why Node v17 is being unable to handle installing webpack along with the template, but it does. Hence, it doesn't install Webpack, nor its directory within config, nor the environment.js file. 

Looking for this particular error may tempt you to stack-overflow some solutions, such as these:

```sh
export NODE_OPTIONS=--openssl-legacy-provider
```

***DON'T.***

This will render your node installation useless. At least until you run another command. The fix for this will be to run that same command with an addendum:

```sh
export NODE_OPTIONS=--openssl-legacy-provider unset NODE_OPTIONS
```

Such as the one found [here](https://github.com/microsoft/vscode/issues/136599). Seriously, what a headache.

Instead, perhaps, your original solution would be to downgrade your nvm node version, by installing, perhaps, v14 o v16 instead of v17.

So, we go:

```sh
nvm install 16
nvm use 16
```

And then run your Railsbytes template once again.  Should that not work to install webpack, try installing webpack and preparing the dependencies before trying to reinstall webpack.

First, erase your previous dependencies:

```sh
/node_modules
/tmp/cache
yarn.lock
Gemfile.lock
```

And then re-install dependencies:

```sh
bundle install
rails webpacker:install
rails assets:precompile
rails webpacker:compile
```

This should work in the end. Voila! Hope you do enjoy this course as I'm currently doing. 