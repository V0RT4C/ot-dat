import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@v0rt4c/dat",
    version: Deno.args[0],
    description: "This is a library that can read/write tibia .DAT files.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/V0RT4C/ot-dat.git"
    },
    bugs: {
      url: "https://github.com/V0RT4C/ot-dat.git/repo/issues"
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");