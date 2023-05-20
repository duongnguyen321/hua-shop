const { exec } = require("child_process");
const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).default("text", "update code").argv;

const text = argv._[0] ? argv._[0] : argv.text;

exec(
  `concurrently \"git add . && git commit -m "${text}" && git push\" \"vercel --prod\"`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  }
);
