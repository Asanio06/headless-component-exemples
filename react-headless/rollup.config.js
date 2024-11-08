import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "./build",
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      del({ targets: "build/*" }),
      postcss({
        extract: true,
      }),
      typescript({
        tsconfigOverride: {
          exclude: ["**/*.mock.ts", "**/*.stories.ts*"],
        },
      }),
    ],
  },
];
