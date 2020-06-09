const path = require("path");
const {
  exec
} = require("child_process");
const fs = require("fs");
const file_path = path.join(__dirname, "../packages");
const fileDirs = fs.readdirSync(file_path).filter(val => {
  return val !== ".DS_Store"
})
fs.exists(file_path, (exit) => {
  exit ? readDirectory() : console.log("找不到相关路径")
})

function readDirectory() {
  fileDirs.forEach(fileDir => {
    startBuild(fileDir);
  });
}

function startBuild(dir) {
  let currentDir = path.join(file_path, dir);
  console.log(currentDir)
  new Promise((resolve, reject) => {
    exec("cd " + currentDir + " && npm run build", (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout)
      }
    });
  });
}