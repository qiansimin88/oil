var util = require( './util' );
var chalk = require( 'chalk' );
var path = require( 'path' );
var fs = require( 'fs-extra' );
module.exports = function () {
    util.read( '.pastor/cli.json' )
        .then( dataOrigin => {
            var data = JSON.parse( dataOrigin );
            var initFileList = data.init;
            var progress = util.progressShow( 'download template ING!!! 🙄', initFileList.length );

            //存入本地的文件
            fs.outputFile( path.join( __dirname, 'localStorage.json' ), dataOrigin, err => {
                if( err ) throw new Error( err );
            } );

            initFileList.map( _ => {
                util.read( _ ).then( steam => {
                    fs.outputFile( process.env.PWD + '/' + _ , data, err => {
                        if( err ) throw new Error( err );
                        progress.tick();
                    } )
                } )
            } );
        } ).catch( err => {
            console.log( chalk.red( '[ error ]: ', err ) );
        } );
}