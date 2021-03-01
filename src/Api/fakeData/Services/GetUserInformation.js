const userInformation = {
  id: 1,
  name: "Liliana Mora",
  short_name: "Liliana",
  username: "kanecode",
  general: {
    active_courses: "08",
    new_oportunities: "123",
    registered_students: "45",
    given_certificates: "20",
  },
  earning: {
    total: "5863",
  },
};

//Get User
export const getUserDashboardInformation = async (userID) => {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );

  const data = await req.json();
  return await userInformation;
};
//jsonplaceholder.typicode.com/users/1
