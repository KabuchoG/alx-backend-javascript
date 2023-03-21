function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success",
      };
    })
    .catch((error) => {
      console.error(
        "An error occurred while fetching data from the API:",
        error
      );
      return new Error();
    });
}
