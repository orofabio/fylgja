/**
 * Check if the file type matches the file mode.
 *
 * @param {string} filename
 * @returns string - file base type to work with
 */
function fileType(filename) {
    const figmaMode = filename.endsWith(".figma-tokens.json");
    const jsonMode = filename.endsWith(".json");
    const scssMode = filename.endsWith(".scss");
    const cssMode = filename.endsWith(".css");

    return figmaMode
        ? "figma"
        : jsonMode
        ? "json"
        : scssMode
        ? "scss"
        : cssMode
        ? "css"
        : "custom";
}

export default fileType;
