var fs = require('fs');
var dir = '';

var variables = '// COLORS\n$color-primary:\n\n$color-secondary:\n\n' +
                '// FONT\n\n$default-font-size: 1.6rem;\n';

var mixins = '@mixin respond($breakpoint) {\n@if $breakpoint == phone {\n' +
            '@media only screen and(max-width: 37.5em) { @content };    //600px\n' +
            '}\n@if $breakpoint == tab-port {\n@media only screen and(max-width: 56.25em)'+ 
            '{ @content };     //900px\n}\n@if $breakpoint == tab-land {\n' +
            '@media only screen and(max-width: 75em) { @content };    //1200px\n'+
            '}\n@if $breakpoint == big-desktop {\n' +
            '@media only screen and(min-width: 112.5em) { @content };    //1800\n' +
            '}\n}\n';

var base = '*,\n*::after,\n*::before {\nmargin: 0;\npadding: 0;\nbox-sizing: inherit;\n}\n\n' +
    'html {\nfont-size: 62.5 %;\n@include respond(tab-land) {\nfont-size: 56.25 %;\n}\n\n' +
    '@include respond(tab-port) {\nfont-size: 50 %;\n}\n\n@include respond(big-desktop)' +
    '{\nfont-size: 75 %;\n}\n}\n'; 

var main = '@import "abstracts/functions";\n@import "abstracts/mixins";\n' +
            '@import "abstracts/variables";\n\n@import "base/animations";\n' +
            '@import "base/base";\n@import "base/typography";\n@import "base/utilities";\n';

if (process.argv[2]) {
    dir = process.argv[2];
    dirsass = dir + '/sass';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dir + '/css', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dir + '/js', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dir + '/img', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass, (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/abstracts', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/base', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/components', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/layout', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/pages', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/themes', (err) => { if (err) console.log('There was some error: ' + err) });
        fs.mkdirSync(dirsass + '/vendors', (err) => { if (err) console.log('There was some error: ' + err) });

        //ABSTRACTS
        fs.appendFile(dirsass + '/abstracts' +'/_variables.scss' , variables, (err) => { if(err)console.log('There was some error: ' + err) });   
        fs.appendFile(dirsass + '/abstracts' + '/_functions.scss', null,  (err) => { if (err)console.log('There was some error: ' + err) });   
        fs.appendFile(dirsass + '/abstracts' + '/_mixins.scss', mixins, (err) => { if (err)console.log('There was some error: ' + err) }); 
        fs.appendFile(dirsass + '/abstracts' + '/_placeholders.scss', null, (err) => { if (err)console.log('There was some error: ' + err) });

        //BASE
        fs.appendFile(dirsass + '/base' + '/_base.scss', base, (err) => { if (err)console.log('There was some error: ' + err) });
        fs.appendFile(dirsass + '/base' + '/_animations.scss', null,  (err) => { if (err)console.log('There was some error: ' + err) });
        fs.appendFile(dirsass + '/base' + '/_typography.scss', null, (err) => { if (err)console.log('There was some error: ' + err) });
        fs.appendFile(dirsass + '/base' + '/_utilities.scss', null, (err) => { if (err)console.log('There was some error: ' + err) });

        //COMPONENTS
        //LAYOUT
        //PAGES
        //THEMES
        //VENDORS

        fs.appendFile(dirsass + '/main.scss', main, (err) => { if (err)console.log('There was some error: ' + err) });
        fs.appendFile(dir + '/index.html', null, (err) => { if (err) console.log('There was some error: ' + err) });
        console.log('Create success');
    } else {
        console.log('Folder(projectname) exist, try difrent name/path.')
    }
}
else { console.log('U need to specify project name and/or path e.g \nprojectname \nor \npath/to/projectname')}
