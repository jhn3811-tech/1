// 자동 생성된 코드입니다. 편집하지 마십시오.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "수준1":
            case "수준1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000010000010101010000000101010101010100000100000100000000000000000001000001010101000000000000000000010100000000000000000001010101000100000000000000000000010000010001000101010101010000000100000100010000000000000000000001010101000100010000000000000000000000000001000100000000000000000000000000000001010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . 2 . . 2 2 2 2 . . 
. 2 2 2 2 2 2 2 . . 2 . . 2 . . 
. . . . . . . 2 . . 2 2 2 2 . . 
. . . . . . . 2 2 . . . . . . . 
. . 2 2 2 2 . 2 . . . . . . . . 
. . 2 . . 2 . 2 . 2 2 2 2 2 2 . 
. . 2 . . 2 . 2 . . . . . . . . 
. . 2 2 2 2 . 2 . 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// 자동 생성된 코드입니다. 편집하지 마십시오.
