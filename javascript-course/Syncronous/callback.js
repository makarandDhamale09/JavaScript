function getData(id, getDataCallBack) {
  setTimeout(() => {
    console.log("data", id);
    if (getDataCallBack) {
      getDataCallBack();
    }
  }, 2000);
}

/* to get the data in a synchronous form like one after another
we use these callbacks

So if you see these getData calls are called one after another
but the problem here is that this is nested callbacks or
callback hell which is very bad to read and understand
*/

getData(1, () => {
  console.log("getting data 2.....");
  getData(2, () => {
    console.log("getting data 3.....");
    getData(3, () => {
      console.log("getting data 4.....");
      getData(4);
    });
  });
});
