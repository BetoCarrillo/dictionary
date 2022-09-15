import { useContext } from "react";
import { Link } from "react-router-dom";
import Random from "../Components /Random";
import SearchBar from "../Components /SearchBar";
import WordCards from "../Components /WordCards";
import { AuthContext } from "../Context/authcontext";
import { DictionaryContext } from "../Context/dictionarycontext";

function Dictionary() {
  const { user } = useContext(AuthContext);

  const {
    search,
    setSearch,
    words,
    setWords,
    fetchData,
    loader,
    setLoader,
    setError,
    error,
  } = useContext(DictionaryContext);
  /*       
  useEffect(() => {
    fetchData();
  }, [search]); */

  return (
    <div className="bodydictionarydiv">
      {user ? (
        <div className="welcome">
          {" "}
          <div> Welcome {user.email}! </div>
          <div className="welcometwo">
            {" "}
            You can add words to your vocabulary{" "}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="divBar ">
        <div className=" buttonsBar">
          <SearchBar setSearch={setSearch} />
          <Random setSearch={setSearch} fetchData={fetchData} />
        </div>
      </div>

      <div>
        {!loader ? (
          words &&
          words.map((word, i) => {
            return (
              <div key={i}>
                <WordCards words={words} />
              </div>
            );
          })
        ) : (
          <p className="loader">
            <span className="material-symbols-outlined">search</span>
          </p>
        )}
      </div>

      {user ? (
        ""
      ) : (
        <div className="welcomenotlogin">
          {" "}
          <span>
            {" "}
            Don't forget to{" "}
            <Link className="loginLink" to="/login">
              {" "}
              login{" "}
            </Link>{" "}
            to add words to your vocabulary
          </span>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
