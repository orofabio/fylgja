import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ filename: "easing.scss", props });
propsBuilder({ filename: "_index.scss", props, varOnly: true });
propsBuilder({ filename: "tokens.json", props });