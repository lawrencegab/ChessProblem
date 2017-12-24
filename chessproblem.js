function bishopandpawn(bishop,pawn) {

    bishop = bishop.split('');
    pawn = pawn.split('');

    console.log(pawn, bishop)

    var blet = bishop[0].charCodeAt(0);
    var plet = pawn[0].charCodeAt(0);
    var bnum = bishop[1].charCodeAt(0);
    var pnum = pawn[1].charCodeAt(0);

    if(blet == plet && (bnum == pnum)){
        return true;
    }

    var diff = Math.abs(blet - plet)

    if(pnum < bnum){
        var test1 = bnum - diff;

    if(test1 == pnum){
        return true;
    }}
    else if(pnum > bnum) {
        test2 = bnum + diff;

        if(test2 == pnum) {
            return true;
         } 
        else {
            return false
        }
    }
    }

console.log(bishopandpawn('a3', 'f8')) // Enter bishop coord then pawn coord