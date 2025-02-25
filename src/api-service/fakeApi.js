// export const getTodo = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };

export async function getTodo() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      //   Authorization: "Bearer ....",
    },
  };

  const response = fetch("https://jsonplaceholder.typicode.com/todos", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

///

export async function GetCompanyListPanelSide(
  {
    roleId = 2,

    pageSize = 3,
    heights = [200],
    widths = [200],
    qualities = [90],
    catIds = null,
    parentCatIds = null,
    keyWord = "",
    isOrderByInsertTimeDes = false,
    isOrderByInsertTimeAsec = false,
    isOrderByUpdateTimeDes = false,
    isOrderByUpdateTimeAsec = false,
    isVisible = false,
    isAllTypeOfVisiblity = true,
    isConfirmed = false,
    isAllTypeOfConfirmation = true,
  },
  pageParam,
) {
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roleId,
      page: pageParam,
      pageSize,
      heights,
      widths,
      qualities,
      catIds,
      parentCatIds,
      keyWord,
      isOrderByInsertTimeDes,
      isOrderByInsertTimeAsec,
      isOrderByUpdateTimeDes,
      isOrderByUpdateTimeAsec,
      isVisible,
      isAllTypeOfVisiblity,
      isConfirmed,
      isAllTypeOfConfirmation,
    }),
  };
  const response = fetch(
    "https://api.karkojo.com/dd/v1/News/GetNewsListClientSide",
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}
