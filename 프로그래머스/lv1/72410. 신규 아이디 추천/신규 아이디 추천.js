function solution(new_id) {
  let change_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  while (change_id.length < 3) {
    change_id += change_id[change_id.length - 1];
  }

  return change_id;
}

// 방법2
// function solution(new_id) {
//   let change_id = new_id
//     .toLowerCase()
//     .replace(/[^a-z0-9-_.]/g, "")
//     .replace(/\.{2,}/g, ".")
//     .replace(/^\.|\.$/g, "")
//     .padEnd(1, "a")
//     .slice(0, 15)
//     .replace(/\.$/g, "");
//   return change_id.padEnd(3, change_id[change_id.length - 1]);
// }