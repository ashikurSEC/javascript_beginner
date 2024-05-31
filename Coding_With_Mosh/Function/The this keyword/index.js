const video = {
    title : 'X-men',
    part  : ['1', '2', '3'],
    showTags () {
        this.part.forEach(function (part) {
            console.log(this.title, part);
        }, this);
    }
};

video.showTags();