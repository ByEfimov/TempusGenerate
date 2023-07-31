export function Animate(node, NameAnim, time) {
  return (node.style.cssText = `animation: ${time}ms forwards ${NameAnim};`);
}
