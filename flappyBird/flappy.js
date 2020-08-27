function newElement(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barrier(reverse = false){
    this.element = newElement('div', 'barrier')

    const edge = newElement('div', 'edge')
    const corps = newElement('div', 'corps')
    this.element.appendChild(reverse ? corps : edge)
    this.element.appendChild(reverse ? edge : corps)

    this.setHeight = height => corps.style.height = `${height}px`
}

// const b = new Barrier(true)
// b.setHeight(200)
// document.querySelector('[wm-flappy]').appendChild(b.element)

function PairOfBarrier(height, opening, x){
    this.element = newElement('div', 'pair-of-barriers')

    this.higher = new Barrier(true)
    this.less = new Barrier(false)
    
    this.element.appendChild(this.higher.element)
    this.element.appendChild(this.less.element)

    this.drawOpening = () => {
        const topHigher = Math.random() * (height - opening)
        const topLess  = height - opening - topHigher
        this.higher.setHeight(topHigher)
        this.less.setHeight(topLess)
    }
    this.getX = () => parseInt(this.element.style.left.split('px') [0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.drawOpening()
    this.setX(x)
}

const b = new PairOfBarrier(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.element)