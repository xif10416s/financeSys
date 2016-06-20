(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app/scripts/', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular',
        '@angular2-material': 'node_modules/@angular2-material',
    };


    var materialPkgs = [
        'core',
        'button',
        'sidenav',
        'checkbox',
    ];

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'admin/main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'}
    };

    materialPkgs.forEach(function(pkg)  {
        packages['@angular2-material/'+pkg] = {main: pkg+'.js'};
    });

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);