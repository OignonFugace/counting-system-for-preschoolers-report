import scrollSpy from 'simple-scrollspy';

/* ANCHORS */
anchors.options = {
    placement: 'left',
    icon: '#'
};

anchors.add();


/* SCROLLSPY */
const menuElement = document.querySelector('#toc');
console.log(menuElement);
scrollSpy(menuElement);


