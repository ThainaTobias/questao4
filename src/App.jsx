import Button from "./Button";
import "./App.css";
function App(){
  const palavras_chaves=[
    {
      link:"https://play-lh.googleusercontent.com/6irmW1vXy884nc1pdhWXaWCy051C70o7nbQ-qa-Ct84qJalNopVSXOUD2Fu53JgILCM=w240-h480-rw",
      nome:"IFRO"
    }, 
    {
      link:"https://uploads.metropoles.com/wp-content/uploads/2021/12/01152246/logo-globo-coluna-600x400.jpg",
      nome:"Globo"
    }, 
    {
    link:"https://hwpi.harvard.edu/files/styles/os_news_full/public/fas-acadtech/files/zoom-icon-white-on-blue.png?m",
    nome:"Zoon"
    }, 
    {
    link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/2048px-Facebook_Messenger_logo_2018.svg.png",
    nome:"Messenger"
    }, 
    {
    link:"https://img.utdstc.com/icon/9a3/432/9a34328d07731f33f5f7f1d624e560d65193857a5d7f86d3e3f931a81998c864:200",
    nome:"LOL"
    }, 
    {
    link:"https://i.pinimg.com/originals/c1/ec/da/c1ecda477bc92b6ecfc533b64d4a0337.png",
    nome:"DOTA"
    }, 
    {
    link:"http://3.bp.blogspot.com/-ux7u3JC4T9c/VAJTmGjRQiI/AAAAAAAADE8/1t9iJr5BySw/s1600/Untitled-2.png",
    nome:"The Sims"
    }, 
    {
    link:"https://styles.redditmedia.com/t5_2r4qh/styles/communityIcon_dm83xoyt71p41.png",
    nome:"CODWW2"
    }, 
    {
    link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC4XOFHBiDU2K2-a5wo4_imHeTIuTbyQmLfr0us4BL38stZxfXdsCgrhzmSKZKBke8Js&usqp=CAU",
    nome:"MK"
    }, 
    {
    link:"https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1200px-Logotipo_do_SBT.svg.png",
    nome:"SBT"
    }, 
  ]
  return(
    <div className="mae">
      {palavras_chaves.map((botao)=> {
        return <Button 
        link={botao.link} 
        nome={botao.nome}
        />

      })
      }
    </div>
  )
}
export default App;