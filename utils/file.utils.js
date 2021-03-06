module.exports = function () {
    var self = this;
    
    /**
     * get all files from folder.
     */
    self._getAllFilesFromFolder = function(dir) {
    
        var filesystem = require("fs");
        var results = [];
    
        filesystem.readdirSync(dir).forEach(function(file) {
    
            file = dir+file;
            var stat = filesystem.statSync(file);
    
            if (stat && stat.isDirectory()) {
                results = results.concat(self._getAllFilesFromFolder(file));
            } else results.push(file);
    
        });
    
        return results;
    
    };

    return self;
};