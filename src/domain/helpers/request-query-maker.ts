const RequestQueryMaker = (key: any, isFirstParmas: boolean) => {
  const removeString = key.queryKey.filter(
    (value: any) => value != "character" && value != "location" && value != "episode"
  );
  const params = Object.assign({}, ...removeString);
  const argEntities = Object.entries(params);

  const makeUrlParams = () => {
    return argEntities.map(
      (arg: any) => arg[1] && arg[0] + '=' + arg[1] + '&',
    );
  };

  const paramsList = makeUrlParams();

  const formatToUrlParams = () => {
    let url = '';
    if (isFirstParmas) {
      url = `?${paramsList.map((param: any) => param && param)}`;
    } else {
      url = `${paramsList.map((param: any) => param && param)}`;
    }
    const formattedUrl = url.replace(/,/g, '');
    return formattedUrl;
  };

  const urlParams = formatToUrlParams();

  return urlParams;
};

export default RequestQueryMaker;
