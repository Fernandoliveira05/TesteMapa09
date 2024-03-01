var player;
export class CenaTeste extends Phaser.Scene {

    constructor() {
        super({ key: "CenaTeste" });
    }

    preload() {
        this.load.image('tiles', 'assets/conjunto_de_blocos/japaneseCityFree.png');
        this.load.image('tiles1', 'assets/conjunto_de_blocos/OfficeInterior.png');
        this.load.tilemapTiledJSON('map', 'assets/meta.json');
        this.load.spritesheet('player', 'assets/spritePlayer.png', { frameWidth: 146, frameHeight: 150 });
    }

    create() {
        var map = this.make.tilemap({ key: 'map' });
        const tiles1 = map.addTilesetImage('OfficeInterior', 'tiles1');
        const tiles = map.addTilesetImage('japaneseCityFree', 'tiles');

        var chao = map.createLayer('chao', tiles1, 0, 0);
        var paredeSalas = map.createLayer('parede salinha', tiles1, 0, 0);
        var planta2 = map.createLayer('planta2', tiles1, 0, 0);
        var planta1 = map.createLayer('planta1', tiles1, 0, 0);
        var varanda = map.createLayer('varanda', tiles1, 0, 0);
        var planta = map.createLayer('planta', tiles1, 0, 0);
        var lixo = map.createLayer('lixo', tiles1, 0, 0);
        var salaescada = map.createLayer('sala escada', tiles1, 0, 0);
        var armarios = map.createLayer('armarios', tiles1, 0, 0);
        var cafe = map.createLayer('cafe', tiles1, 0, 0);
        var predio = map.createLayer('predio', tiles1, 0, 0);
        var objetos = map.createLayer('objetos', tiles1, 0, 0);
        var janelasparedes3 = map.createLayer('janelas e paredes_3', tiles1, 0, 0);
        var janelasparedes2 = map.createLayer('janelas e paredes_2', tiles1, 0, 0);
        var janelasparedes = map.createLayer('janelas e paredes', tiles1, 0, 0);

        chao.setCollisionByProperty({ collider: true });
        janelasparedes.setCollisionByProperty({ collider: true });
        janelasparedes2.setCollisionByProperty({ collider: true });
        janelasparedes3.setCollisionByProperty({ collider: true });
        objetos.setCollisionByProperty({ collider: true });
        paredeSalas.setCollisionByProperty({ collider: true });
        planta.setCollisionByProperty({ collider: true });
        cafe.setCollisionByProperty({ collider: true });
        armarios.setCollisionByProperty({ collider: true });
        salaescada.setCollisionByProperty({ collider: true });
        lixo.setCollisionByProperty({ collider: true });
        planta2.setCollisionByProperty({ collider: true });
        planta1.setCollisionByProperty({ collider: true });
        varanda.setCollisionByProperty({ collider: true });
        predio.setCollisionByProperty({ collider: true });

        player = this.physics.add.sprite(300, 120, 'player', 1).setScale(0.20);

        this.physics.add.collider(player, paredeSalas);
        this.physics.add.collider(player, varanda);
        this.physics.add.collider(player, planta2);
        this.physics.add.collider(player, planta1);
        this.physics.add.collider(player, planta);
        this.physics.add.collider(player, lixo);
        this.physics.add.collider(player, salaescada);
        this.physics.add.collider(player, armarios);
        this.physics.add.collider(player, cafe);
        this.physics.add.collider(player, predio);
        this.physics.add.collider(player, objetos);
        this.physics.add.collider(player, janelasparedes);
        this.physics.add.collider(player, janelasparedes2);
        this.physics.add.collider(player, janelasparedes3);

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(player, true, 0.05, 0.05);

        this.input.keyboard.on('keydown_Z', function (event) {
            this.cameras.main.setZoom(this.cameras.main.zoom + 0.1);
        }, this);

        this.input.keyboard.on('keydown_X', function (event) {
            this.cameras.main.setZoom(Math.max(0.1, this.cameras.main.zoom - 0.1));
        }, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        player.body.setVelocity(0);

        if (this.cursors.left.isDown) {
            player.body.setVelocityX(-400);
        } else if (this.cursors.right.isDown) {
            player.body.setVelocityX(400);
        }

        if (this.cursors.up.isDown) {
            player.body.setVelocityY(-400);
        } else if (this.cursors.down.isDown) {
            player.body.setVelocityY(200);
        }
    }
}
