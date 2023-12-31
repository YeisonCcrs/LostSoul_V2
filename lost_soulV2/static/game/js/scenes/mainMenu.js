import { mainMenuComponents } from "/static/game/js/components/mainMenuComponents.js"
export class mainMenu extends Phaser.Scene{
    constructor(){
        super({key : 'mainMenu'})
        this.mainMenuComponentsItems = new mainMenuComponents(this)
    }

    preload(){
        this.load.image('mm-bg', '/static/game/src/gameAssets/environment/MainMenu/main-menu-bg.png')
        this.mainMenuComponentsItems.preload()
    }

    create(){
        this.add.image( 400,304, 'mm-bg')
        this.mainMenuComponentsItems.create()
    }

    update(){
    }
}