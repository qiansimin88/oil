var profile = require( './localStorage.json' );
var chalk = require( 'chalk' );
var fs = require( 'fs-extra' );
var file = require( 'fs' );
//删除预定的文件配置
module.exports = function () {
    profile.init.map( _ => {
        //如果存在
        file.stat( process.env.PWD + _, ( err, stats ) => {
            if( !err ) {
                fs.remove( process.env.PWD + _, err => {
                    if( err )  console.log( chalk.red( '[ error : ]', err ) );
                    console.log( chalk.green( '[ success 😄 ]' ) );
                } )
            }
        } )
    } )
}