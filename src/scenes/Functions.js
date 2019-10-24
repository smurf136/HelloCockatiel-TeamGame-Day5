let enemy1
let enemy2
let enemy3
let player
let groups
class Functions extends Phaser.Scene {
    constructor() {
        super({
            key: 'Functions'
        })
    }
    preload() {
        // this.load.image('bg', 'src/assets/images/clounds.png')
        this.load.spritesheet('enemy1', 'src/assets/images/enemy-small.png', {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet('enemy2', 'src/assets/images/enemy-medium.png', {
            frameWidth: 32,
            frameHeight: 16
        })
        this.load.spritesheet('enemy3', 'src/assets/images/enemy-big.png', {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet('player', 'src/assets/images/ship.png', {
            frameHeight: 24,
            frameWidth: 16
        })
    }
    create() {
        // this.add.image(400, 300, 'bg')
        // enemy1 = this.add.sprite('enemy1', 10, 20)
        // enemy2 = this.add.sprite('enemy2', 40, 20)
        // enemy3 = this.add.sprite('enemy3', 70, 20)

        player = this.physics.add.sprite(170, 680, 'player').setSize(1.5).setScale(1.5)
        enemy1 = this.physics.add.sprite(10, 20, 'enemy1').setSize(2)
        enemy2 = this.physics.add.sprite(100, 20, 'enemy2').setSize(2)
        enemy3 = this.physics.add.sprite(190, 20, 'enemy3').setSize(2)

        groups = this.physics.add.group();
        groups.add(enemy1)
        groups.add(enemy2)
        groups.add(enemy3)
        for(let i = 0;i < groups.getLength();i++){
            console.log(groups.getChildren()[i])
        }
        groups.setVelocityY(200)
        groups.getChildren()[1].setVelocityY(400)
        groups.getChildren()[2].setTint(0xff00ff)
        

    }
    update(delta, time) {

    }
}
export default Functions
