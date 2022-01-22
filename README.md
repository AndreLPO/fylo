# Frontend Mentor - Fylo data storage component solution

This is my solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

Mobile:

![image](https://user-images.githubusercontent.com/69281348/150615127-ae5439af-53b9-43ae-8e11-f55bcb30266a.png)

Desktop:

![image](https://user-images.githubusercontent.com/69281348/150615145-9c14cc14-3245-4ac2-bcdd-a71b1c317dcf.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In this project, I learned how to build a responsive WebSite with SASS (SCSS), using mixins.

```sass
@mixin mobile {
  @media (min-width: $screen-mobile) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $screen-desktop) {
    @content;
  }
}
```

### Continued development

I'll keeping learning React.JS with SASS and pratcting with Frontend Mentor.

### Useful resources

- [Medium Article about MIXINS](https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2) - This helped me with mixin. I really liked mixins and breakpoints and will use it going forward.

## Author

- Frontend Mentor - [@AndreLPO](https://www.frontendmentor.io/profile/AndreLPO)
- Linkedin - [@André Oliveira](https://www.linkedin.com/in/andr%C3%A9-luiz-pereira-de-oliveira-a6919a1a4/)
