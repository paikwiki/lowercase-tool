const fs = require('fs');
const targetDir = 'images/';
fs.readdir(targetDir, (err, files) => {
  if (err) throw err;
  files.forEach( currentFileName => {
    const newFileName = currentFileName.toLowerCase();
    fs.rename(targetDir+currentFileName, targetDir+newFileName, (err) => {
      if (err) throw err;
      console.log(`${currentFileName} → ${newFileName}`);
    });
  });
});
