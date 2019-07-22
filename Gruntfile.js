module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        cwd: './node_modules/feather-icons/dist/icons/',
        src: ['*.svg', '!tablet.svg'],
        dest: './icons'
      }
    },
    webfont: {
      icons: {
        src: './icons/*.svg',
        dest: './dist',
        options: {
          templateOptions: {
            baseClass: 'feather-icon',
            classPrefix: 'icon-'
          }
        }
      }
    }
  })

  // Load the plugin that provides the "webfont" task.
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-webfont')

  // Default task(s).
  grunt.registerTask('default', ['copy', 'webfont'])
}
