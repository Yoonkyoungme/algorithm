function solution(arr1, arr2) {
  // 방법1
  return arr1.map((dataList, dataListIndex) =>
    dataList.map((data, dataIndex) => data + arr2[dataListIndex][dataIndex])
  );

  // 방법2
  // let result = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   let temp = [];
  //   for (let j = 0; j < arr1[0].length; j++) {
  //     temp.push(arr1[i][j] + arr2[i][j]);
  //   }
  //   result.push(temp);
  // }

  // return result;
}
