document.addEventListener('DOMContentLoaded', () => {

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    console.log(productContainers)
    console.log(nxtBtn)
    console.log(preBtn)

    if (productContainers.length === 0 || nxtBtn.length === 0 || preBtn.length === 0) {
        console.error('Required elements not found');
        return;
    }

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        console.log(containerWidth/4)
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth/5;
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth/4;
        })
    })    

})
