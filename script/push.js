const { exec } = require("child_process");
const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).default("text", "update code").argv;

const text = argv._[0] ? argv._[0] : argv.text;

const pushChild = exec(`git add . && git commit -m "${text}" && git push`);

pushChild.stdout.on("data", (data) => {
  console.log(data);
});

pushChild.stderr.on("data", (data) => {
  console.error(data);
});

pushChild.on("error", (error) => {
  console.error(error);
});

pushChild.on("close", (code) => {
  console.log(`Git push process exited with code ${code}`);
  if (code === 0) {
    const vercelChild = exec("vercel --prod");

    vercelChild.stdout.on("data", (data) => {
      console.log(data);
    });

    vercelChild.stderr.on("data", (data) => {
      console.error(data);
    });

    vercelChild.on("error", (error) => {
      console.error(error);
    });

    vercelChild.on("close", (code) => {
      console.log(`Vercel process exited with code ${code}`);
    });
  }
});
