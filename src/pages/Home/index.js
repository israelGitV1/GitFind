import { useState } from "react";
import Header from "../../components/Header";
import Background from '../../assets/background.png'
import ItemList from "../../components/ItemList";
import Input from "../../components/Input";
import { api } from "../../services/api";

import { Container } from "./styles";

function App() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetDate = async () => {
    //const userData = await fetch (`https://api.github.com/users/${user}`);
    const userData = await api.get(`/users/${user}`);
    const newUser = await userData.data;
  
    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await api.get(`/users/${user}/repos`);
      const newRepos = await reposData.data;
      if(newRepos.length){
        setRepos(newRepos);
      }
    }else
    setMessage(newUser.message);
  }

  const handleRemoveItemData = (name) => {
    const newRepos = repos.filter((repo) => repo.name !== name);
    if(newRepos.length){
      setRepos(newRepos);
    }
    console.log("id: "+name);
  }

    return (
      <div className="App">
        <Header/>
         <Container>
          <img src={Background} className="background" alt='backgound app'/>
          <div className="info">
            <div> 
               <Input 
                  value ={user} 
                  onChange={event => setUser(event.target.value)} 
                  placeholder = "Digite seu User do GitHub"
                  onClik={handleGetDate}    
               />
            </div>
            {currentUser?.name ? (
              <>
                <div className="perfil">
                    <img src={currentUser.avatar_url} className="profile" alt="img perfil"/>
                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
                <hr />
              </>
            ):(
              <>
                <div className="perfilNot">
                  <div>
                    <h3>{message}</h3>
                  </div>
                </div>
                <hr />
              </>
            )}
            {repos?.length ? (
              <div>
                  <h4 className="repositorio">Repositórios</h4>
                  {repos.map(repo => (
                    <>
                      <ItemList title={[repo.name]} desciption={repo.description} url={repo.html_url} click={() => handleRemoveItemData(repo.name)}/>
                    </>
                  ))}
                </div>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }
  
  export default App;
  