import chalk from "chalk";

import app from "./app";
import { PORT } from "./constants";
import connectDB from "./db";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      const localUrl = `http://localhost:${PORT}`;
      const styledUrl = chalk.magenta.underline.bold(localUrl); // Style the URL with Chalk

      console.log(`Server is running at: ${styledUrl}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error: ", err);
  });
