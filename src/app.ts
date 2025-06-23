import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// console.log(yarg);

(async () => {
  await main();
})();

async function main() {
  // console.log(yarg);
  const { base, limit, print, show, destination, fileName } = yarg;
  ServerApp.run({
    base,
    limit,
    print,
    show,
    destination,
    fileName,
  });
}
