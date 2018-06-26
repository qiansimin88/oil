var request = require( 'request' );
var progress = require( 'progress' );
var baseUrl = 'http://git.3dker.com/pub/phoenix-cli-template/raw/master/';

//读取远程配置
function read ( file ) {
    return new Promise( ( resolve, reject ) => {
        request( baseUrl + file, ( err, res, body ) => {
            err && reject( err );
            resolve( body );
        } )
    } );
}

function progressShow ( title, len ) {
    return new progress(  `${ title } [:bar]  :percent :elapseds`, {
        complete: '=',
        incomplete: '  ',
        width: 20,
        total: len
    } )
}

module.exports = {
    read: read,
    progressShow: progressShow
}