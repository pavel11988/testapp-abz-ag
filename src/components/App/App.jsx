//libs/hooks
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

//Api-service functions
import { getUsers, addNewUser } from "../../services/users-api";
import { getPositions } from "../../services/users-api";

//components
import UserList from "../UsersList/UserList";
import UserForm from "../UserForm/UserForm";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";

//styled components
import { AppContainer, ButtonLoadMore, ShowmoreContainer } from "./App.styled";
import Hero from "../Hero/Hero";

function App() {
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);

  //useEffect для первого рендера
  useEffect(() => {
    setLoading(true);

    getPositions()
      .then((positions) => {
        setPositions(positions);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    setLoading(true);

    getUsers(1)
      .then(({ users, pages }) => {
        setUsers(users);
        setPages(pages);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  }, []);

  // useEffect для load more
  useEffect(() => {
    if (page === 1) {
      return;
    }

    getUsers(page)
      .then(({ users, pages }) => {
        if (users.length > 0) {
          setUsers((prevArr) => [...prevArr, ...users]);
        }
        if (users.length === 0) {
          return Promise.reject(new Error(`Users not found.`));
        }
        setPages(pages);
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  function loadMoreUsers() {
    setLoading(true);
    setPage(page + 1);
  }

  function refreshUsers() {
    getUsers(1)
      .then(({ users, pages }) => {
        setUsers(users);
        setPages(pages);
      })
      .catch((error) => {
        return error;
      });
    setPage(1);
  }

  async function addUser(
    { photo, name, email, phone, position_id },
    resetForm
  ) {
    const userFormData = new FormData();
    userFormData.append("photo", photo);
    userFormData.append("name", name);
    userFormData.append("email", email);
    userFormData.append("phone", phone);
    userFormData.append("position_id", position_id);

    const statusAdding = await addNewUser(userFormData);
    if (statusAdding.success === true) {
      toast.success(statusAdding.message);
      await refreshUsers();
      setLoading(false);
      resetForm();
    }
    if (statusAdding.success === false) {
      toast.error(statusAdding.message);
      setLoading(false);
    }
  }

  const LOADMORE_VISIBLE =
    loading === false && page !== pages && users && users.length !== 0;
  const LOADMORE_LOADER = loading === true && page !== 1;
  const LOADING_USERS =
    loading === true && users && users.length === 0 && page === 1;
  const NOT_FOUND = loading === false && !users;

  return (
    <AppContainer>
      {NOT_FOUND && <NotFound />}
      {!NOT_FOUND && <Header />}
      {!NOT_FOUND && <Hero />}

      {LOADING_USERS && <Loader color="blue" />}

      <UserList users={users} loading={loading} />

      <ShowmoreContainer>
        {LOADMORE_LOADER && !NOT_FOUND && <Loader color="blue" />}
        {LOADMORE_VISIBLE && !NOT_FOUND && (
          <ButtonLoadMore onClick={loadMoreUsers}>Show more</ButtonLoadMore>
        )}
      </ShowmoreContainer>

      {!NOT_FOUND && (
        <UserForm id="sign-in-form" positions={positions} onSubmit={addUser} />
      )}
      <Toaster />
    </AppContainer>
  );
}

export default App;
