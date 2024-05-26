

function Post ( title, description, ceo ) {
    this.title        = title;
    this.description  = description;
    this.ceo          = ceo;
    this.views        = 0;
    this.isLive       = true;
    this.comments     = [];
}

let post = new Post('Junior Web Developer', 'Knowledge HTML, CSS, JAVSCRIPT & PHP', 'John Smith');

console.log( post );