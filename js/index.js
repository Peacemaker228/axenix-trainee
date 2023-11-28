const fetchUser = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ data: { user: "Monkey", admin: true } });
    }, 3000);
  });
};

const login = (obj) => {
  return obj.admin
    ? console.log("Successfully logged in!")
    : console.error("Failed to log in, please try again.");
};

console.log("Program starting...");

const getUser = async () => {
  try {
    const { data } = await fetchUser();
    login(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Program complete!");
  }
};

getUser();
