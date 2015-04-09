function change() {
    for (i=0; i <100; i++) {
        if (document.images[i].getAtrribute('width') === null) {
            continue;
        } else {
            var width = document.images[i].getAttribute('width')
            var height = document.images[i].getAttribute('height')
            document.images[i].setAttribute('src', 'http://placekitten.com/' + width + '/' + height)
        }       
    }
}
change()


function change() {
    for (i=0; i < document.images.length; i++) {
            var width = document.images[i].getAttribute('width');
            var height = document.images[i].getAttribute('height');
            if (!width || !height) {
                continue
            } else {
            document.images[i].setAttribute('src', 'http://placekitten.com/' + width + '/' + height)
            }
        }       
}
change()