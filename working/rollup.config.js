export default {
    external: ["lodash", "jquery"],
    input: ["hello.js"],
    output: [
      {
        dir: "public",
        format: "system",
        sourcemap: true
      }
    ]
  };
  