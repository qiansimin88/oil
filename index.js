#! /usr/bin/env node
var program = require( 'commander' );

//安装
program
    .version( '1.0.0', '-v, --version')
    .command( 'init' )
    .action( require( './component/install' ) )

//删除
program
    .command( 'remove' )
    .action( require( './component/remove' ) )

program.parse( process.argv );