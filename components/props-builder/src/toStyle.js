import kebabCase from "./kebabCase.js";

/**
 * Creates array of tokens from a javascript object with CSS props.
 *
 * @param {Object} props
 * @param {string} prefix
 * @param {string} varSyntax
 * @returns {{ styles: string[], appendedMeta: string[] }}
 */
const toStyleTokens = (props, prefix = "", varSyntax = "--") => {
    const styles = [];
    const indent = varSyntax !== "--" ? "" : "    ";
    let appendedMeta = "";

    Object.entries(props).forEach(([name, value]) => {
        if (typeof value === "string" || typeof value === "number") {
        } else {
            return console.warn(`Value of ${name} is not a string or number.`);
        }

        if (name.endsWith("-@")) {
            const appendedMetaBr = appendedMeta.length > 0 ? "\n\n" : "";

            appendedMeta += appendedMetaBr + value;
            return;
        }

        name = kebabCase(name);
        const varName = prefix
            ? `${varSyntax}${prefix}${name}`
            : `${varSyntax}${name}`;

        // * TEMP: save mode for SCSS / values that need to be quoted,
        // * until SCSS version 2.0, which drops native / calc support
        if (varSyntax === "$") {
            if (typeof value === "string") {
                value.includes("/") && (value = `"${value}"`);
            }
        }

        styles.push(`${indent}${varName}: ${value};\n`);
    });

    return {
        styles,
        appendedMeta,
    };
};

export default toStyleTokens;
