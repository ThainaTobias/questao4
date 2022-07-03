import Button from "./Button";
import "./App.css";
function App(){
  const palavras_chaves=[
    {button: "linux"}, 
    {button: "docker"}, 
    {button: "server"},
    {button: "rails"},
    {button: "douane"},
    {button: "my-developments"}, 
    {button: "command-line"},
    {button: "ruby"},
    {button: "c-2"},
    {button: "linux-on-mac"}, 
    {button: "maintenance"}, 
    {button: "security"},
    {button: "gnome"},
    {button: "kubernetes"},
    {button: "mes-developpements"},
    {button: "ubuntu"},
    {button: "python"},
    {button: "vcs"},
    {button: "capybara"},
    {button: "contribution"},
    {button: "git"},
    {button: "apt"},
    {button: "bazaar"},
    {button: "chef"},
    {button: "cucumber"}, 
    {button: "debian"},
    {button: "game"},
    {button: "howto"},
    {button: "packaging"},
    {button: "testing"},
    {button: "boost"},
    {button: "debug"},
    {button: "devise"},
    {button: "elixir"},
    {button: "gtk"},
    {button: "homebrew"},
    {button: "information"},
    {button: "ssh"},
    {button: "tuxtremsplit"},
    {button: "xpath"}
  
  ]
  return(
    <div className="mae">
      {palavras_chaves.map((botao)=> {
        return <Button 
        button ={botao.button} />
      })
      }
    </div>
  )
}
export default App;