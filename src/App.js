import { useState, useEffect } from "react";
import "./App.css";
import InputUser from "./components/InputUser/InputUser";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [userList, setUserList] = useState([]);
  const [enableAdd, setEnableAdd] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("items");
    const fetchUsers = JSON.parse(temp);
    if (fetchUsers) {
      setUserList(fetchUsers);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(userList);
    localStorage.setItem("items", temp);
  }, [userList]);

  const onAddUserHandler = (fullUser) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        {
          username: fullUser.username,
          lastname: fullUser.lastname,
          email: fullUser.email,
          number: fullUser.number,
          id: Math.random(),
        },
      ];
    });
  };

  const onDeleteHandler = (userId) => {
    setUserList([
      ...userList.filter((user) => {
        return user.id !== userId;
      }),
    ]);
  };

  const setUpdateUsername = (username, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.username = username;
        }
        return user;
      })
    );
  };
  const setUpdateLastname = (lastname, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.lastname = lastname;
        }
        return user;
      })
    );
  };
  const setUpdateEmail = (email, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.email = email;
        }
        return user;
      })
    );
  };
  const setUpdateNumber = (number, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.number = number;
        }
        return user;
      })
    );
  };
  console.log(userList);
  const startAddHandler = () => {
    setEnableAdd(true);
  };
  const stopAddHandler = () => {
    setEnableAdd(false);
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main className="container">
              <div className="holder container">
                <Header startAdd={startAddHandler} />
                <UserList
                  users={userList}
                  deleteHandlerProps={onDeleteHandler}
                  setUpdate={setUpdateUsername}
                  setUpdateLastname={setUpdateLastname}
                  setUpdateEmail={setUpdateEmail}
                  setUpdateNumber={setUpdateNumber}
                />

                {enableAdd && (
                  <InputUser
                    closeAdd={stopAddHandler}
                    onAddUser={onAddUserHandler}
                  />
                )}
              </div>
            </main>
          </div>
        </Route>
        <Route path="/o-nama">
          <About />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
