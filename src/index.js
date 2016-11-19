import {parse} from 'esprima';

export default function treeShake(text) {
  const ast = parse(text);
}
